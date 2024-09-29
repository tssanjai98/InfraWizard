function UserRequirmentspage() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="w-full h-[100%] flex flex-col gap-5 justify-center items-center">
          <div className="w-[70%] flex flex-col gap-5">
            <h1 className="text-left text-[30px] font-extralight">
              Enter a prompt descibing you application so that we can help you
              develop the architecture
            </h1>
            <textarea className="border-2 w-[100%] h-[200px] p-5 overflow-x-scroll text-[2xl]"></textarea>
            <button className="w-[30%] cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold">
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
