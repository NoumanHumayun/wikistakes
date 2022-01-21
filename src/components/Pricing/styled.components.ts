import styled, { css } from "styled-components";
import chevron from "assets/svg/chevron.svg";
import { Button } from "antd";

export const ImageContainer = styled.div<{ src: string }>`
  width: 350px;
  height: 400px;
  border-radius: 10%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src || ""});
`;

export const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const Para = styled.p<{ background?: string }>`

align-items: center;
  text-align: left;
  margin:0px 10px;
  padding: 10px 20px;
  color: #fff;
  background: ${({ background }) => (background ? background : ``)}
`;

export const Span = styled.p<{indent?: string}>`
  font-style: "Gotham";
  font-size: 14px;
  letter-spacing: 0.02em;
  
  text-indent: ${({ indent }) => (indent ? indent : ``)};
  margin: 0px;
  padding: 0px;
  color: #fff;
  display: inline-block;

`;

export const ChevronIcon = styled.div`
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: 0 10px;
  background: url(${chevron});
`;

export const ButtonGroup = styled.div`
  width: 60%;

  border: 1px solid rgba(255, 255, 255, 0.26);
  display: inline-block;
  border-radius: 10px;
  margin: 0 5%;
`;

export const ButtonG = styled(Button)`
  font-style: "Gotham";
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  text-align: center;

  background-color: #2c2c2c;
  width: 20%;
  color: #fff;
  padding: 20px 20px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.26);
`;
