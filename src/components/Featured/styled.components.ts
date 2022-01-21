import styled, { css } from "styled-components";

export const ImageContainer = styled.div<{ src: string }>`
  width: 250px;
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

export const Dot = styled.div`
  height: 25px;
  width: 25px;
  background-color: #000;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  vertical-align: middle;
`;

export const Button = styled.div`
  text-align: center;
  height: 40px;
  width: 200px;
  background-color: #ff8b00;
  border-radius: 100px;
  display: inline-block;
  margin-top: -20%;
  margin-left: 10%;
`;

export const ButtonText = styled.p`
  vertical-align: sub;
  display: inline-block;
`;
