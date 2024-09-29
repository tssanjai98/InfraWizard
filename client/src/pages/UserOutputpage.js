import { GiArtificialIntelligence } from "react-icons/gi";

function UserOutputpage() {
  return (
    <>
      <div className="w-[100%] h-[100vh] pt-20 px-10 pb-10 flex flex-col gap-5">
        <h1 className="text-left text-[30px] font-extralight">
          Architecture Diagram
        </h1>
        <div className="w-[100%] h-[80%] border-2">
          <iframe
            className="w-[100%] h-[100%]"
            src="https://lucid.app/documents/embedded/bcee09c7-4bf1-455a-b1db-8c2825f4a204"
            id="e8odAkwvwPbL"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default UserOutputpage;
