import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-row">
        <div className="lg:w-[50%] lg:h-[100%] w-[0%] h-[0%] bg-server-background bg-cover bg-center"></div>
        <div className="lg:w-[50%]  w-[100%] flex flex-row justify-center items-center">
          <form className="flex flex-col gap-5">
            <h1 className="text-[30px] font-extralight">Login</h1>
            <div>
              <label>Username</label>
              <input type="text" className="border-2" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" className="border-2" />
            </div>
            <div>
              <button className="cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold">
                Login
              </button>
            </div>
            <div>
              <p className="font-extralight">
                Not a member yet?{" "}
                <Link
                  className="text-blue-500 font-light hover:underline"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
