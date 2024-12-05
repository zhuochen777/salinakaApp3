import React, { useEffect, useState, useContext } from "react";
import "../css/Signin.css";
import "../css/Nav.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward.js";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../component/FormInput.jsx";
import Nav from "../component/Nav.jsx";
import { isSignedinContext } from "../App.js";
import {
  auth,
  provider_google,
  provider_github,
  provider_facebook,
} from "../config/firebase-config.js";
import { signInWithPopup,signInWithRedirect } from "firebase/auth";

export default function Signin() {
  const navigate = useNavigate();
  const { isSignedin, setIsSignedin, signupInfo, setSignupInfo } =
    useContext(isSignedinContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [emailLabel, setEmailLabel] = useState("Email");
  const [passwordLabel, setPasswordLabel] = useState("Password");
  const [showWarning, setShowWarning] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "test@example.com",
      label: emailLabel,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      label: passwordLabel,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleEmailValidation() && handlePasswordValidation()) {
      let localEmail = JSON.parse(localStorage.getItem("app-user"))?.email;
      let localPassword = JSON.parse(
        localStorage.getItem("app-user")
      )?.password;

      if (values.email === localEmail && values.password === localPassword) {
        setIsSignedin(true);
        setSignupInfo(JSON.parse(localStorage.getItem("app-user")));
      } else {
        setIsSignedin(false);
        setShowWarning(true);
      }
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleEmailValidation = () => {
    const { email } = values;
    if (email.length === 0) {
      setEmailLabel("Email is required.");
      return false;
    } else if (email) {
      const emailPattern = /^\S+@\S+\.\S+$/;
      if (!emailPattern.test(email)) {
        setEmailLabel("Email is not valid.");
        return false;
      } else {
        setEmailLabel("Email");
      }
    }
    return true;
  };

  const handlePasswordValidation = () => {
    const { password } = values;
    if (password.length === 0) {
      setPasswordLabel("Password is required.");
      return false;
    } else if (password) {
      setPasswordLabel("Password");
    }
    return true;
  };

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider_google).then((data) => {
      setSignupInfo(data.user);
      setIsSignedin(true);
    }).catch((error)=>alert(error.message));
  };

  const handleGithubClick = () => {
    signInWithPopup(auth, provider_github).then((data) => {
      setSignupInfo(data.user);
      setIsSignedin(true);
    }).catch((error)=>alert(error.message));;
  };

  const handleFacebookClick = () => {
    signInWithRedirect(auth, provider_facebook).then((data) => {
      setSignupInfo(data.user);
      setIsSignedin(true);
    }).catch((error)=>alert(error.message));
  };

  useEffect(() => {
    handleEmailValidation();
  }, [values.email]);

  useEffect(() => {
    handlePasswordValidation();
  }, [values.password]);

  useEffect(() => {
    setEmailLabel("Email");
    setPasswordLabel("Password");
  }, []);

  //如果已经sign in，跳转至主页
  useEffect(() => {
    if (isSignedin === true) {
      navigate("/");
    }
  }, [isSignedin]);

  return (
    <>
      <div className="signin-wrapper">
        <Nav />
        <div className="content">
          <div className="auth-content">
        <div className={showWarning? "warning red":"warning"}>Incorrect email or password</div>
            <div className={showWarning?"auth red":"auth"}>
              <div className="auth-main">
                <h3>Sign in to Salinaka</h3>
                <form action="#" onSubmit={(e) => handleSubmit(e)}>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      label={input.label}
                      value={values[input.name]}
                      onChange={onChange}
                      errorMessage={input.errorMessage}
                    />
                  ))}
                  {/* <div className="auth-field">
                  <div className="input-group">
                    <label className="label-input">* Full Name</label>
                    <input
                      className="input-form"
                      type="text"
                      name="fullname"
                      placeholder="John Doe"
                    />
                  </div>
                </div> */}
                  {/* <div className="auth-field">
                  <div className="input-group">
                    <label className="label-input">* Email</label>
                    <input
                      className="input-form"
                      type="email"
                      name="email"
                      placeholder="test@example.com"
                    />
                  </div>
                </div> */}
                  {/* <div className="auth-field">
                  <div className="input-group">
                    <label className="label-input">* Password</label>
                    <input
                      className="input-form"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                    />
                  </div>
                </div> */}
                  <br />
                  <div className="auth-field auth-action">
                    <button type="submit" className="auth-button">
                      Sign In&nbsp;
                      <ArrowForwardIcon />
                    </button>
                  </div>
                </form>
              </div>
              <div className="auth-divider">
                <h6>OR</h6>
              </div>
              <div className="auth-provider">
                <button
                  className="auth-provider-button provider-facebook"
                  onClick={() => handleFacebookClick()}
                >
                  <span className="anticon">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="facebook"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path>
                    </svg>
                  </span>
                  Continue with Facebook
                </button>
                <button
                  className="auth-provider-button provider-google"
                  onClick={() => handleGoogleClick()}
                >
                  <span className="anticon">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="google"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path>
                    </svg>
                  </span>
                  Continue with Google
                </button>
                <button
                  className="auth-provider-button provider-github"
                  onClick={() => handleGithubClick()}
                >
                  <span className="anticon">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="github"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                  </span>
                  Continue with GitHub
                </button>
              </div>
            </div>
            <div className="auth-message">
              <span className="auth-info">
                <strong>Already have an account?</strong>
              </span>
              <Link to="/signup">
                <button className="button signup">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
