import { SiTerraform } from "react-icons/si";
import { FaDollarSign } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

function Homepage() {
  return (
    <>
      <div className="w-full bg-server-background h-[400px] bg-cover bg-center"></div>
      <div className="w-[100%] flex flex-col lg:flex-row gap-5 px-5 py-10 justify-between items-center">
        <div className="w-[100%] rounded-sm p-10 border-2">
          <div className="card-image">
            <GiArtificialIntelligence className="scale-[500%]  z-[-99]" />
          </div>
          <div>
            <p className="text-center">
              Simply enter your deployment requirements, and let our AI generate
              detailed architecture text that outlines the optimal cloud
              infrastructure tailored to your needs.
            </p>
          </div>
        </div>
        <div className="w-[100%] rounded-sm p-10 border-2">
          <div className="card-image">
            <FaDollarSign className="scale-[500%] z-[-99]" />
          </div>
          <div>
            <p className="text-center">
              Get accurate cost assessments for your current or proposed
              architecture, helping you make informed decisions that align with
              your budget.
            </p>
          </div>
        </div>
        <div className="w-[100%] rounded-sm p-10 border-2">
          <div className="card-image">
            <SiTerraform className="scale-[500%] z-[-99]" />
          </div>
          <div>
            <p className="text-center">
              Receive ready-to-deploy Terraform scripts based on your specific
              architecture, streamlining the deployment process and minimizing
              manual errors.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#b5b5b5] px-10 py-20">
        <p className="font-extralight text-[30px] mb-5">
          Why Choose{" "}
          <span className="font-extrabold">
            <span className="text-[#FF5722]">Infra</span>Wizard
          </span>
          ?
        </p>
        <p className="font-extralight text-[20px]">
          <span className="font-extrabold">
            <span className="text-[#FF5722]">Infra</span>Wizard
          </span>{" "}
          is designed for cloud professionals looking to enhance their
          deployment strategy with efficiency and accuracy. By automating the
          design and cost analysis process, you can focus on what truly
          matters—building robust, scalable solutions that drive business
          success.
        </p>
      </div>
    </>
  );
}

export default Homepage;
