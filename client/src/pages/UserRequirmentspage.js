import { useState } from "react";
import axios from "axios";

function UserRequirmentspage() {
  const [prompt, setPrompt] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://5wgjl5hscpr6igf7b4nilgvp4a0aaybg.lambda-url.us-east-1.on.aws",
        {
          functional_requirements: prompt,
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting prompt:", error);
    }
  };

  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="w-full h-[100%] flex flex-col gap-5 justify-center items-center">
          <div className="w-[70%] flex flex-col gap-5">
            <h1 className="text-left text-[30px] font-extralight">
              Enter a prompt descibing you application so that we can help you
              develop the architecture
            </h1>
            <textarea
              className="border-2 w-[100%] h-[200px] p-5 overflow-x-scroll text-[2xl]"
              value={prompt}
              onChange={handleInputChange}
            />
            <button
              className="w-[30%] cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold"
              onClick={handleSubmit}
            >
              Build
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default UserRequirmentspage;
