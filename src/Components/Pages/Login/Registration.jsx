import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userCreate, googleCreateUser, user } = useAuth();
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = { name, url, email, password };

    if (password.length < 6) {
      toast("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Your password should have at least one capital letter");
      return;
    } else if (!/[!"#$%&'()*+,-./:;<>=?@[\]^_`|{}~]/.test(password)) {
      toast("Your password should have at least one special character");
      return;
    }

    userCreate(newUser)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          toast("Your Registration Success!!");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  const handleLoading = () => {
    if (!user) {
      return redirect("/login");
    }
    return null;
  };

  const handleGoogle = () => {
    googleCreateUser()
      .then((result) => {
        console.log(result.user);
        toast("Your Registration Success!!");
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 lg:w-1/3">
            <img
              src="https://i.ibb.co/FWy9wy9/Sign-up-rafiki.png"
              className="mx-auto"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#f3701d] to-[#f79b61] md:w-1/2 lg:max-w-3xl">
            <div className="text-center mt-4">
              <h1 className="text-3xl font-bold text-[#000080]">
                Registration Now !
              </h1>
            </div>
            <form onSubmit={handleRegistration} className="card-body">
              <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="url"
                    placeholder="Enter Your Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-14 left-72 lg:left-[240px]"
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>
              <div>
                <p className="text-center mt-4">
                  Do not have an account <span className="text-white">?</span>{" "}
                  please{" "}
                  <Link className="text-white font-semibold" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <input
                  onClick={handleLoading}
                  className="btn bg-[#000080] text-white hover:text-[#f3701d]"
                  type="submit"
                  value="Submit"
                />
                <ToastContainer />
              </div>
              <div className="text-center">
                <button className=" btn mt-3" onClick={handleGoogle}>
                  <span className="text-4xl font-semibold">
                    <FcGoogle></FcGoogle>
                  </span>
                  <span className="text-[#000080] capitalize">
                    Login With Google
                  </span>
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
