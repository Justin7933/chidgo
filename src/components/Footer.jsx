import React from "react";
import styled from "styled-components";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  @media only screen and (max-width: 1024px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;
const Copyright = styled.span`
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem><Link href="https://www.linkedin.com/in/justin-damon-771503204/"><LinkedInIcon/></Link></ListItem>
          <ListItem><Link href="https://github.com/Justin7933"><GitHubIcon/></Link></ListItem>
          <ListItem><Link href="https://www.instagram.com/"><InstagramIcon/></Link></ListItem>
          <ListItem><Link href="https://www.tiktok.com/@chidgoofficial">TikTok</Link></ListItem>
        </List>
        <Copyright>chidgo Ⓒ</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;