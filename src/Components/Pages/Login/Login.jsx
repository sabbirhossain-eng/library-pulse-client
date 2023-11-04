import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, user, googleCreateUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    login(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        if (result.user) {
          navigate("/");
        }
        toast("Login Success!!");
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  const handleLoading = () => {
    if (!user) {
      return redirect("/");
    }
    return null;
  };

  const handleGoogle = () => {
    googleCreateUser()
      .then((result) => {
        console.log(result.user);
        toast("Login Success!!");
        navigate(location?.state ? location.state : "/");
        if (result.user) {
          toast("Login Success!!");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        toast(errorMessage);
      });

    if (!user) {
      return redirect("/");
    }
    return null;
  };
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/BtDZ0z6/Forgot-password-rafiki.png"
              className="mx-auto"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#f3701d] to-[#f79b61] md:w-1/2">
            <div className="text-center mt-4">
              <h1 className="text-3xl font-bold text-[#000080]">Login now !</h1>
            </div>
            <form onSubmit={handleLogin} className="card-body">
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
                  className="absolute top-14 left-72 lg:left-[270px]"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
              <p className="text-center mt-4">
              Do not have an account <span className="text-white">?</span> please{" "}
              <Link className="text-white font-semibold" to="/registration">
                Registration
              </Link>
            </p>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleLoading}
                  className="btn bg-[#000080] text-white hover:text-[#f3701d]"
                >
                  Login
                </button>
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

export default Login;
