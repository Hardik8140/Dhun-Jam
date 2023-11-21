import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../Redux/users/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //   console.log(username);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    dispatch(loginUser(userData)).then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <LOGINDIV>
      <h1>Venue Admin Login</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Signin" />
        </form>
      </div>
    </LOGINDIV>
  );
};

export default Login;

const LOGINDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  h1 {
    color: #ffffff;
    font-size: 32px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  form > input {
    color: #ffffff;
    font-size: 16px;
    margin: 10px;
    padding: 8px;
    border: 1px solid white;
    background-color: #030303;
    border-radius: 8px;
  }
`;
