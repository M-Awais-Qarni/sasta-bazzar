import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import commonContext from "../../contexts/common/commonContext";
import useForm from "../../hooks/useForm";
import useOutsideClose from "../../hooks/useOutsideClose";
import useScrollDisable from "../../hooks/useScrollDisable";
import AdminContext from "../common/AdminContext";

const AccountForm = () => {
  const { isFormOpen, toggleForm,adminCheck } = useContext(commonContext);
  const { inputValues, handleInputValues } = useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isadmin, setIsAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  const formRef = useRef();
  const [Logins, setLogins] = useState([]);
  const handleUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validate = () => {
    let result = false;
    if (username === "" || username === null) {
      result = false;
      alert("Please enter Username ");
    } else {
      result = true;
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please enter Password ");
    } else {
      result = true;
    }
    return result;
  };
  const handleFormSubmit = async (e) => {
    // alert("Submit called");
    e.preventDefault();
    if (validate()) {
      //   alert("Proceeding");
      fetch("http://localhost:3031/logins?Username=" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            alert("Please Enter valid user");
          } else {
            if (resp[0].Password == password) {
                localStorage.setItem("Username", resp[0].Username);
                window.location.reload();
            } else {
              alert("Password Incorrect !!" + resp.password);
            }
          }
        })
        .catch((err) => {
          alert("login failed Due to " + err.message);
        });
    } else {
      alert("Else running");
    }
  };

  useOutsideClose(formRef, () => {
    toggleForm(false);
  });

  useScrollDisable(isFormOpen);

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // Signup-form visibility toggling
  const handleIsSignupVisible = () => {
    setIsSignupVisible((prevState) => !prevState);
  };

  return (
    <>
      {isFormOpen && (
        <div className="backdrop">
          <div className="modal_centered">
            <form id="account_form" onSubmit={handleFormSubmit}>
              {/*===== Form-Header =====*/}
              <div className="form_head">
                <h2>{isSignupVisible ? "Signup" : "Login"}</h2>
                <p>
                  {isSignupVisible
                    ? "Already have an account ?"
                    : "New to Sasta-Bazzar ?"}
                  &nbsp;&nbsp;
                  <button type="button" onClick={handleIsSignupVisible}>
                    {isSignupVisible ? "Login" : "Create an account"}
                  </button>
                </p>
              </div>

              {/*===== Form-Body =====*/}
              <div className="form_body">
                {isSignupVisible && (
                  <div className="input_box">
                    <input
                      type="text"
                      name="username"
                      className="input_field"
                      //   value={inputValues.username || ""}
                      onChange={handleUsernameChange}
                    />
                    <label className="input_label">Username</label>
                  </div>
                )}

                <div className="input_box">
                  <input
                    type="email"
                    name="mail"
                    className="input_field"
                    // value={inputValues.mail || ""}
                    onChange={handleUsernameChange}
                  />
                  <label className="input_label">Email</label>
                </div>

                <div className="input_box">
                  <input
                    type="password"
                    name="password"
                    className="input_field"
                    // value={inputValues.password || ""}
                    onChange={handlePasswordChange}
                  />
                  <label className="input_label">Password</label>
                </div>

                {isSignupVisible && (
                  <div className="input_box">
                    <input
                      type="password"
                      name="conf_password"
                      className="input_field"
                      value={inputValues.conf_password || ""}
                      onChange={handleInputValues}
                      required
                    />
                    <label className="input_label">Confirm Password</label>
                  </div>
                )}

                <button type="submit" className="btn login_btn">
                  {isSignupVisible ? "Signup" : "Login"}
                </button>
              </div>

              {/*===== Form-Footer =====*/}
              <div className="form_foot">
                <p>or login with</p>
                <div className="login_options">
                  <Link to="/">Facebook</Link>
                  <Link to="/">Google</Link>
                  <Link to="/">Twitter</Link>
                </div>
              </div>

              {/*===== Form-Close-Btn =====*/}
              <div
                className="close_btn"
                title="Close"
                onClick={() => toggleForm(false)}
              >
                &times;
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default AccountForm;
