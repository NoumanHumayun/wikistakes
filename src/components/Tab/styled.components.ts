import styled, { css } from "styled-components";

export const TabContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  background-size: cover;
  background: rgba(255, 255, 255, 0.3);
  &:hover {
    background: #fff;
    color: #661055;
  }
  font-family: "Gotham";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 12px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.1em;
`;

export const Image = styled.div<{ src: string }>`
  height: 50%;
  margin: 25% 0 0 30%;
  background-size: 50% 50%;
  background-image: url(${({ src }) => src || ""});
  background-repeat: no-repeat;
`;

