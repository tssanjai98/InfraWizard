import { GiArtificialIntelligence } from "react-icons/gi";

function UserOutputpage() {
  return (
    <>
      <div className="w-[100%] h-[100vh] pt-20 px-10 flex flex-col gap-5">
        <h1 className="text-left text-[30px] font-extralight">
          Architecture Diagram
        </h1>
        <div className="w-[100%] h-[60%] border-2">
          <iframe
            className="w-[100%] h-[100%]"
            src="https://lucid.app/documents/embedded/86d57795-9a47-45f0-95fc-ff8acdeaa70a"
          ></iframe>
        </div>
        <div className="w-[100%] flex flex-col justify-start items-center gap-4">
          <button className="w-[100%] cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold flex flex-col gap-2 items-center justify-center">
            <p className="">Download Terraform Code</p>
          </button>
          <button className="w-[100%] cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold">
            Download Architecture
          </button>
        </div>
      </div>
    </>
  );
}

export default UserOutputpage;
