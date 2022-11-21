import React from "react";
import background from "../../Assests/bgimage.jpg";
import styled from "styled-components";

const Background = () => {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

export default Background;
