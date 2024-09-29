import { Link } from "react-router-dom";

function UserAccountpage() {
  const username = "Sanjai";
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center font-extralight">
        <div className=" text-[50px] mb-10">Hello {username}!</div>
        <div>
          <Link
            className="text-blue-500 font-light hover:underline"
            to="/user/1/user-req"
          >
            Click here
          </Link>{" "}
          to get started
        </div>
      </div>
    </>
  );
}

export default UserAccountpage;
