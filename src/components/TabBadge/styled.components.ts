import styled, { css } from "styled-components";

export const TabContainer = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  background-size: cover;
  background: #282829;
  &:hover {
    background: #ff8b00;
  }
`;

export const Image = styled.div<{ src: string }>`
  height: 50%;
  margin: 25% 0 0 30%;
  background-size: 70% 70%;
  background-image: url(${({ src }) => src || ""});
  background-repeat: no-repeat;
`;

export const BadgeText = styled.p`
  font-family: "Gotham";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 10px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.1em;
  margin: 0px 20px;
`;

export const BadgePara = styled.p`
  font-family: "Gotham";
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 6px;
  color: #fff;
  text-align: center;
  letter-spacing: -0.1em;
  margin: 10px 0px;
`;
