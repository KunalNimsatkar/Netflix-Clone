import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfig";
import Background from "./Background";
import Header from "./Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [Values, SetValues] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async () => {
    try {
      const { email, password } = Values;
      await signInWithEmailAndPassword(firebaseAuth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          user && navigate("/netflix");
        }
      );
    } catch {
      alert("User not found");
    }
  };
  return (
    <Container>
      <Background />
      <div className="content">
        <Header SignIn />
        <div className="body flex column box-shadow">
          <h1>Sign In</h1>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={Values.email}
              onChange={(e) =>
                SetValues({ ...Values, [e.target.name]: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={Values.password}
              onChange={(e) =>
                SetValues({ ...Values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <button onClick={handleSignin}>Sign In</button>
          <div className="flex j-between footer">
            <div className="checkbox flex j-center">
              <input type="checkbox" />
              Remember me
            </div>
            Need Help ?
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 2rem;
      width: 30%;
      .form {
        display: grid;
        grid-template-columns: "1fr 1fr";
        width: 100%;
        input {
          border: 0;
          border-radius: 4px;
          color: #fff;
          width: 100%;
          height: 50px;
          line-height: 50px;
          padding: 16px 20px;
          background: transparent;
          background-color: #333;
          margin-bottom: 1.5rem;
        }
        button {
          padding: 1rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
    .footer {
      color: #b3b3b3;
      font-size: 0.8rem;
      .checkbox {
        color: #b3b3b3;
        font-size: 0.8rem;
        input {
          background: #b3b3b3;
          margin-right: 0.2rem;
        }
      }
    }
  }
`;
export default Login;
