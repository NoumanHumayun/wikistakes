import styled, { css } from "styled-components";

export const ImageContainer = styled.div<{ src: string }>`
  width: 300px;
  height: 300px;
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
