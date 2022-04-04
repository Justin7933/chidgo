import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";
import Monkey from "../img/monkey.png";

const Container = styled.div`
  display: flex;
  
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  padding-top: 250px;
  
  @media only screen and (max-width: 480px) {
    
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  padding-left: 100px;
  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Price = () => {
  return (
    <Container>
      <Left>
      <PriceCard price="25/hour" type="Our" />
      </Left>
      <Right><Image src={Monkey} /></Right>
    </Container>
  );
};

export default Price;