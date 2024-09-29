function Aboutpage() {
  return (
    <>
      <div className="w-full bg-server-background h-[400px] bg-cover bg-center"></div>
      <div className="w-full p-10 flex flex-col justify-center gap-5 text-center lg:text-left text-[20px] font-extralight">
        <div>
          <h1 className="main">
            About <span className="text-[#FF5722]">Infra</span>Wizard
          </h1>
          <p>
            InfraWizard is an AI-powered platform designed to help you
            seamlessly create cloud infrastructure architectures tailored to
            your needs. Whether you are working with AWS, Azure, or other cloud
            providers, our solution simplifies the process of deploying
            scalable, cost-efficient infrastructure.{" "}
          </p>
        </div>
        <div>
          <p className="main">
            With <span className="text-[#FF5722]">Infra</span>Wizard, you can:{" "}
          </p>
          <ul className="list-disc">
            <li>
              <p>
                <span className="font-light">Enter Requirements:</span> Input
                the specifics of your cloud environment, including services,
                resources, and performance needs.
              </p>
            </li>
            <li>
              <p>
                <span className="font-light">Generate Architectures:</span> Our
                AI analyzes your input and automatically generates a
                comprehensive architecture that best fits your requirements.
              </p>
            </li>
            <li>
              <p>
                <span className="font-light">Estimate Costs:</span> Receive
                real-time cost estimates based on the resources chosen, helping
                you manage your cloud expenses effectively.
              </p>
            </li>
            <li>
              <p>
                <span className="font-light">Deploy Faster:</span> Get Terraform
                code generated on the fly, enabling you to implement the
                architecture in minutes.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p>
            At <span className="text-[#FF5722]">Infra</span>Wizard, we believe
            that managing cloud infrastructure should be easy, accessible, and
            efficient for everyone—from startups to large enterprises. By
            leveraging AI, we reduce complexity and empower you to focus on what
            truly matters—building great products.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
