import styled, { css } from "styled-components";

export const TabContainer = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 10px;
  background-size: cover;
  background: rgba(196, 196, 196, 0.22);
  &:hover {
    background: #ff8b00;
  }
`;

export const Image = styled.div<{ src: string }>`
  height: 50%;
  margin: 0 0 0 5%;
  background-size: 95% 100%;
  background-image: url(${({ src }) => src || ""});
  background-repeat: no-repeat;
`;

export const CategoryText = styled.p`
  font-family: "Gotham";
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 6px;
  color: #ff8b00;
  margin: 10px 5%;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 0.1em;
`;

export const TitleText = styled.p`
  font-family: "Gotham";
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: #fff;
  letter-spacing: 0.1em;
`;

export const BlogText = styled.p`
  font-family: "Gotham";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 12px;
  color: #fff;
  letter-spacing: 0.1em;
`;

export const ReadText = styled.p`
  text-align: center;
  font-family: "Gotham";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #fff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 0.1em;
`;
