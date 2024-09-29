import { useState } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../userService";

function Signuppage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      username: username,
      password: password, 
    };

    try {
      await addUser(user); 
      alert("Signed Up");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Error signing up. Please try again.");
    }
  };
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-row">
        <div className="lg:w-[50%] lg:h-[100%] w-[0%] h-[0%] bg-server-background bg-cover bg-center"></div>
        <div className="lg:w-[50%]  w-[100%] flex flex-row justify-center items-center">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <h1 className="text-[30px] font-extralight">Sign Up</h1>
            <div>
              <label>Username:</label>
              <input type="text" className="border-2"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" className="border-2" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required/>
            </div>
            <div>
              <label>Confirm Password:</label>
              <input type="password" className="border-2"  value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               required/>
            </div>
            <div>
              <button type="submit" className="cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold">
                Sign Up
              </button>
            </div>
            <div>
              <p className="font-extralight">
                Already a member?{" "}
                <Link
                  className="text-blue-500 font-light hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signuppage;
