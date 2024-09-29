import { useState, useEffect, useRef } from "react";
import mermaid from "mermaid";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserRequirmentspage() {
  const [prompt, setPrompt] = useState("");
  const [mermaidCode, setMermaidCode] = useState("");
  const mermaidRef = useRef(null);
  const navigate = useNavigate();
  const { username } = useParams();

  const genAI = new GoogleGenerativeAI(
    "AIzaSyBnNUMlU2dg4ZCxudwq_C54UE6l74o9xoM"
  );

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    tools: [
      {
        codeExecution: {},
      },
    ],
  });

  useEffect(() => {
    if (mermaidCode) {
      mermaid.initialize({
        startOnLoad: false,
      });

      if (mermaidRef.current) {
        mermaid.contentLoaded();
      }
    }
  }, [mermaidCode]);

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const cleanMermaidCode = (code) => {
    const mermaidPattern = /graph [LRTB]*[^{]+/;

    const match = code.match(mermaidPattern);

    if (match) {
      let cleanedCode = match[0].trim();
      cleanedCode = cleanedCode.replace(/[^\x20-\x7E]/g, "");
      cleanedCode = code.replace(/```/g, "");
      if (cleanedCode.startsWith("mermaid")) {
        cleanedCode = cleanedCode.split("\n").slice(1).join("\n");
      }

      return cleanedCode;
    }

    return "";
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      alert("Prompt is empty. Try submitting again.");
      return;
    }

    try {
      console.log(prompt);
      const mermaidDiagramCode = await generateMermaidDiagram(prompt);

      const cleanedMermaidCode = cleanMermaidCode(mermaidDiagramCode);

      if (cleanedMermaidCode) {
        console.log("Cleaned Mermaid Diagram Code:", cleanedMermaidCode);
        setMermaidCode(cleanedMermaidCode);
        await generateTerraformCode(cleanedMermaidCode);
        navigate(`/user/${username}/user-output`);
        setPrompt("");
      } else {
        console.warn("No valid Mermaid diagram code found.");
      }
    } catch (error) {
      console.error("Error submitting prompt:", error);
    }
  };

  const generateTerraformCode = async (architectureDescription) => {
    try {
      const result = await model.generateContent(
        `Generate Terraform code for the following architecture:\n\n${architectureDescription}\n\nOnly provide the raw code. Do not include comments, explanations, or citations of any kind.`
      );

      const generatedCode = result.response.text().trim();
      console.log("Generated Terraform Code:", generatedCode);
      downloadTerraformFile(generatedCode);
    } catch (error) {
      console.error("Error generating Terraform code:", error);
    }
  };

  const downloadTerraformFile = (code) => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "infrastructure.tf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const generateMermaidDiagram = async (prompt) => {
    try {
      const result = await model.generateContent(
        `Generate a detailed AWS architecture and then generate Mermaid diagram code for the following from the AWS architecture description:\n\n${prompt}\n\nProvide only the Mermaid code to represent the architecture as a diagram, with no additional comments or explanations. But make sure to include linebreaks using slash n and  tab character slash t so as to keep the string compatible.`
      );

      return result.response.text().trim();
    } catch (error) {
      console.error("Error generating Mermaid diagram code:", error);
      throw error;
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full h-[100%] flex flex-col gap-5 justify-center items-center pt-20 px-10 pb-10">
          <div className="w-[70%] flex flex-col gap-5">
            <h1 className="text-left text-[30px] font-extralight">
              Enter a prompt describing your application so that we can help you
              develop the architecture
            </h1>
            <textarea
              className="border-2 w-[100%] h-[200px] p-5 overflow-x-scroll text-[2xl]"
              value={prompt}
              onChange={handleInputChange}
            />
            <button
              className="w-[100%] cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold"
              onClick={handleSubmit}
            >
              Build and download Terraform Code
            </button>

            {mermaidCode && (
              <div ref={mermaidRef} className="mermaid">
                {mermaidCode}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRequirmentspage;
