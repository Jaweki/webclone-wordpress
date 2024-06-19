import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  display: flex;
  flex-flow: column;
  align-items: end;
  box-sizing: border-box;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px;
  background-color: white;
  box-sizing: border-box;
`;

export const LeftHeader = styled.div`
  display: flex;
  flex-flow: row;
  gap: 20px;
  align-items: end;
  font-size: x-large;
  font-weight: bold;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 20px;
`;

export const BodyTextContent = styled.section`
  background-color: white;
  width: 50%;
  padding: 0 100px;
  display: flex;
  flex-flow: column;
  align-items: start;
  justify-content: center;
  text-align: start;
  gap: 40px;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 400;
  font-size: medium;
  box-sizing: border-box;
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: white;
  padding: 15px 0;
  box-sizing: border-box;
`;

export const SocialLinks = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  gap: 18px;
`;

export const PageOwnership = styled.p`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const ParallaxImage = styled.section`
  margin-top: 50px;
  position: fixed;
  img {
    width: 100%;
  }
`;
