import React from "react";
import styled from "styled-components";
import Me from "../img/me.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
  border-radius: 50%;
  padding-left: 50px;
  padding-top: 30px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  padding-left: 100px;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;

`;

const Feature = () => {
  return (
    <Container>
      <Left>
      <Image src={Me} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design
          <br />
          <b>good</b> business
        </Title>
        <SubTitle>I know that good design means good business.</SubTitle>
        <Desc>
          I help my clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          Below you can find My Portfolio & Other Previous Work
        </Desc>
        <Button><Link href="https://hardcore-pasteur-a5cac6.netlify.app/">Learn More</Link></Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Feature;