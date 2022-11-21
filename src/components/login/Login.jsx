import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebaseConfig";
import Background from "./Background";
import Header from "./Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, SetShowpassword] = useState(false);
  const [Values, SetValues] = useState({
    email: "",
    password: "",
  });

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/netflix");
  });

  const handleSignin = async () => {
    try {
      const { email, password } = Values;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch {}
  };
  return (
    <Container showPassword={showPassword}>
      <Background />
      <div className="content">
        <Header SignIn />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>
              Ready to watch? Enter Your email to create or restart membership
            </h6>
          </div>
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
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={Values.password}
                onChange={(e) =>
                  SetValues({ ...Values, [e.target.name]: e.target.value })
                }
              />
            )}
            {!showPassword && (
              <button onClick={() => SetShowpassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignin}>Sign Up</button>
        </div>
        <div className="footer"></div>
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
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
          font-weight: 700;
          line-height: 4.5rem;
          font-size: 4rem;
        }
        h4 {
          font-weight: 600;
          font-size: 1.5rem;
        }
        h6 {
          font-weight: 400;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 50%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
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
      background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        #111
      );
      position: absolute;
      bottom: 0;
      height: 4rem;
      width: 100%;
    }
  }
`;
export default Login;
