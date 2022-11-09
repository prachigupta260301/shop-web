import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const signIn = () => {
    let input = {
      email: data?.email,
      password: data?.password
    };

    axios.post('http://localhost:5001/signin', input)
      .then(res => {
        if (res.status === 200) {
          let message = res?.data?.message;
          // dispatch karenge data

          // move to home
          if (window.confirm(message) === true) {
            navigate('/');
            localStorage.setItem('TOKEN', res?.data?.data?.token);
            localStorage.setItem('USER_NAME', res?.data?.data?.userName);
          }
        }
      }).catch(err => {
        let errorMsg = err?.response?.data?.message;
        alert(errorMsg);
      })
  }

  const inputEventHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setData((perValue) => {
      if (name === 'email') {
        return {
          email: value,
          password: perValue.password,
        }
      } else if (name === 'password') {
        return {
          email: perValue.email,
          password: value,
        }
      }
    })
  }

  const handleSubmit = () => {
    signIn();
  }

  return (
    <>
      <div className='mt-20'>
        <div className='main-div'>
          <h2>Login</h2>

          <div className="imgcontainer">
            <img src={require("../assets/img/img_avatar2.png")} alt="Avatar" className="avatar" />
          </div>
          <div className="login-container">
            <label htmlFor="email">
              <b>Email ID</b>
            </label>
            <input
              onChange={inputEventHandler}
              value={data?.email}
              type="text"
              placeholder="Enter Email ID"
              name="email"
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              onChange={inputEventHandler}
              value={data?.password}
              type="text"
              placeholder="Enter Password"
              name="password"
            />
            <button onClick={handleSubmit} type="button">Login</button>
            <div className='rememberMe'>
              <label>
                <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
                Remember me
              </label>
              <div className="singup_link">Not a member?{" "}
                <Link
                  to="/register"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>

          <div className="login-container" style={{ backgroundColor: "#f1f1f1" }}>
            <Link to="/" >
              <button type="button" className="cancelbtn">Cancel</button>
            </Link>
            <span className="psw">
              Forgot <a href="/#">password?</a>
            </span>
          </div>

        </div>
      </div>
    </>
  )
}