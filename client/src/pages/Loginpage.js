import { Link } from "react-router-dom";
import { useState } from "react";
import { addUser, getUser } from "../userService";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await getUser(username);

    if (user) {
      if (user.password === password) {
        alert("Login successful!");
      } else {
        alert("Invalid password");
      }
    } else {
      alert("User not found. Please sign up.");
    }
    
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-row">
        <div className="lg:w-[50%] lg:h-[100%] w-[0%] h-[0%] bg-server-background bg-cover bg-center"></div>
        <div className="lg:w-[50%]  w-[100%] flex flex-row justify-center items-center">
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <h1 className="text-[30px] font-extralight">Login</h1>
            <div>
              <label>Username</label>
              <input type="text" className="border-2" value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" className="border-2" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <div>
              <button type="submit"
              className="cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold">
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
