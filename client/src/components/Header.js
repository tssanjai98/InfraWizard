import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Check if the URL contains "/users"
  const isUsersPage = location.pathname.includes("/user");

  return (
    <>
      {isUsersPage ? (
        <div className="flex flex-row justify-between px-4 py-4 w-[100%] items-center bg-white bg-opacity-50 backdrop-blur-lg fixed text-black">
          <div className="w-[50%]">
            <h1 className="text-[20px] lg:text-[30px] font-extrabold cursor-pointer">
              <Link to="/">
                <span className="text-[#FF5722]">Infra</span>Wizard
              </Link>
            </h1>
          </div>
          <div className="w-[50%] flex flex-row gap-10 justify-end items-center font-light">
            <div>
              <button className="cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold">
                <Link to="/">Logout</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between px-4 py-4 w-[100%] items-center bg-white bg-opacity-50 backdrop-blur-lg fixed text-black">
          <div className="w-[50%]">
            <h1 className="text-[20px] lg:text-[30px] font-extrabold cursor-pointer">
              <Link to="/">
                <span className="text-[#FF5722]">Infra</span>Wizard
              </Link>
            </h1>
          </div>
          <div className="w-[50%] flex flex-row gap-10 justify-end items-center font-light">
            <div className="cursor-pointer font-bold">
              <Link to="/about">About</Link>
            </div>
            <div>
              <button className="cursor-pointer border-[#FF5722] border-2 p-2 bg-[#FF5722] font-bold">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
