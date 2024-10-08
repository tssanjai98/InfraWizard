import { Link, useParams } from "react-router-dom";

function UserAccountpage() {
  const { username } = useParams();
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center font-extralight">
        <div className=" text-[50px] mb-10">Hello {username || "User"}!</div>
        <div>
          <Link
            className="text-blue-500 font-light hover:underline"
            to={`/user/${username}/user-req`}
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
