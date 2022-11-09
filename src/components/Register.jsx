import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../redux/user/userSlice";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const registerUser = () => {
    let input = {
      email: data?.email,
      userName: data?.userName,
      password: data?.password,
    };

    axios
      .post("http://localhost:5001/signup", input)
      .then((res) => {
        if (res.status === 201) {
          let message = res?.data?.message;
          let apiRes = res?.data?.data;
          // let obj = {data};

          // dispatch karenge data
          // dispatch(userData(apiRes));

          console.log('apiRes ::',apiRes,message);

          // move to home
          if (window.confirm(message) === true) {
            navigate("/");
            localStorage.setItem("TOKEN", res?.data?.data?.token);
            localStorage.setItem("USER_NAME", res?.data?.data?.userName);
          }
        }
      })
      .catch((err) => {
        let errorMsg = err?.response?.data?.message;
        alert(errorMsg);
      });
  };

  const inputEventHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setData((perValue) => {
      if (name === "email") {
        return {
          email: value,
          userName: perValue.userName,
          password: perValue.password,
        };
      } else if (name === "userName") {
        return {
          email: perValue.email,
          userName: value,
          password: perValue.password,
        };
      } else if (name === "password") {
        return {
          email: perValue.email,
          userName: perValue.userName,
          password: value,
        };
      }
    });
  };

  const handleSubmit = () => {
    registerUser();
  };

  return (
    <>
      <div id="id01" className="modal">
        <div className="modal-content">
          <div className="container">
            <h1>Sign Up</h1>
            <p className="mt-20">
              Please fill in this form to create an account.
            </p>
            <div className="vl"></div>

            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={inputEventHandler}
            />

            <label>
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="userName"
              onChange={inputEventHandler}
            />

            {/* <label>
              <b>Phone Number</b>
            </label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Enter Phone Number"
              name="phoneNumber"
              onChange={inputEventHandler}
            /> */}

            <label>
              <b>Password</b>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              onChange={inputEventHandler}
            />

            <label>
              <input
                type="checkbox"
                defaultChecked="checked"
                name="remember"
                style={{ marginBottom: 15 }}
              />{" "}
              Remember me
            </label>
            <p>
              By creating an account you agree to our{" "}
              <a href="/#" style={{ color: "dodgerblue" }}>
                Terms &amp; Privacy
              </a>
              .
            </p>
            <div className="clearfix">
              <Link to={"/"}>
                <button type="button" className="cancelbtn1">
                  Cancel
                </button>
              </Link>
              <button
                type="button"
                className="signupbtn"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
