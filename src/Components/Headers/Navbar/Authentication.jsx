import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Authentication = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false)

  const handleLogOut = () => {
    logOut()
    .then()
    .catch();
  };
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {user ? (
        <div 
        style={{ zIndex: 1 }}
        className="dropdown lg:dropdown-left ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="User" />
              ) : (
                <img
                  src="https://i.ibb.co/7yL8SZJ/profile-user.png"
                  alt="User"
                />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className={`mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-3 ${
              isOpen ? "hidden" : "block"
            }`}
          >
            <li>{user?.displayName && <p>Name: {user.displayName}</p>}</li>
            <li>{user?.email && <p>Email: {user.email}</p>}</li>
            <li>
              <button
                onClick={handleLogOut}
                className="font-semibold text-lg bg-[#f3701d] text-white hover:text-[#000080] justify-center"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <button className="px-2 rounded-md py-1 capitalize font-semibold text-lg bg-[#f3701d] text-white hover:bg-slate-100 hover:text-[#000080]">
          <Link to="/login">Login</Link>
        </button>
      )}
    </div>
  );
};

export default Authentication;
