import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser, signInWithGoogle, signInWithGithub, setLoading } =
    useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Login with email and password
  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Automatic remove error message
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }

    // login user with email and password and error checking
    loginUser(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          return setError("Sorry, your password is incorrect!");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          return setError(
            "Email not found. Please try again or create a new account!"
          );
        } else {
          setError(error.message);
        }
      });
    setLoading(false);
  };

  // Sign In with Google
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  // Sign In with Github
  const handleGithubLogin = () => {
    signInWithGithub()
      .then(() => {
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Login Account</h1>
      <form
        onSubmit={handleEmailLogin}
        className="w-full max-w-lg mx-auto bg-white p-4 sm:p-8 rounded-md sm:shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            type="email"
            id="email"
            name="email"
            placeholder="prodip@example.com"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <div className="w-full flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus-within:border-green-500">
            <input
              className="outline-none w-full"
              type={isShow ? "text" : "password"}
              id="password"
              name="password"
              placeholder="******"
              required
            />
            {isShow ? (
              <FaEye
                onClick={() => setIsShow(false)}
                className="w-5 h-5 text-gray-400"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setIsShow(true)}
                className="w-5 h-5 text-gray-400"
              />
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="mr-2"
            />
            <label htmlFor="remember-me" className="text-gray-500">
              Remember me
            </label>
          </div>
          <button className="font-semibold">Forgot Password?</button>
        </div>
        <p className="h-6">
          {error && (
            <small className="text-red-500 flex items-center gap-1">
              <CgDanger /> {error}
            </small>
          )}
        </p>
        <button
          className="w-full bg-green-500 text-white text-sm font-bold py-2 px-4 mt-2 mb-4 rounded-md hover:bg-green-600 transition duration-300"
          type="submit"
        >
          Login
        </button>
        <p className="text-center text-sm">Or</p>
        <ul className="flex gap-5 items-center justify-center mt-1 mb-4">
          <li
            onClick={handleGoogleLogin}
            className="w-8 bg-gray-200 p-1 rounded-full"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
              alt="logo"
            />
          </li>
          <li
            onClick={handleGithubLogin}
            className="w-8 bg-gray-200 p-1 rounded-full"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
              alt="logo"
            />
          </li>
          <li className="w-8 bg-gray-200 p-1 rounded-full">
            <img
              src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
              alt="logo"
            />
          </li>
        </ul>
        <hr />
        <p className="text-center mt-2">
          Don't you have an account yet?{" "}
          <span className="text-green-500 font-semibold underline underline-offset-2">
            <Link to={"/registration"}>Registration</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
