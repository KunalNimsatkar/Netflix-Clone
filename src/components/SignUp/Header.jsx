import React from "react";
import logo from "../../Assests/Logonetflix.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <Container className="flex j-between a-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="button__login_exit">
        <button onClick={() => navigate(props.Login ? "/login" : "/signin")}>
          {props.Login ? "Log In" : "Sign In"}
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 4rem;
  background-image: linear-gradient(
    360deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
  .logo {
    img {
      height: 2.5rem;
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
`;

export default Header;
