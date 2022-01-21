import styled, { css } from "styled-components";
import chevron from "assets/svg/chevron.svg";
import { Button, Input } from "antd";

export const Para = styled.p<{ background?: string }>`
  
  font-size: 14px;
  letter-spacing: 0.2em;
  width: 100%;
  height: 10%
  align-items: center;
  text-align: center;
  margin:0px;
  padding: 10px 20px;
  color: #fff;
  text-transform: uppercase;
  background: ${({ background }) => (background ? background : ``)}

`;
export const CustomText = styled.p<{ head?: boolean }>`
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 15px;
  width: 100%;
  height: 10%
  text-align: left;
  margin:0px;
  padding: 10px 20px;
  color: #fff;
  font-weight: ${({ head }) => (head ? "bold" : "normal")}
  text-transform: ${({ head }) => (head ? "uppercase" : "")}
`;

export const CustomInput = styled(Input)`
  width: 450px;
  height: 50px;
  display: inline-block;
  margin: 0 10px;
  border-radius: 100px;
`;

export const CustomButton = styled(Button)`
  text-align: center;
  height: 40px;
  width: 150px;
  background-color: #ff8b00;
  border-radius: 100px;
  display: inline-block;
  curson: pointer;
  margin-left: -20%;
  &:hover {
    background-color: #ff8b00;
    color: #000;
    border: none;
  }
  &:active {
    background-color: #ff8b00;
    color: #000;
    border: none;
  }
`;
