import styled, { css } from "styled-components";

export const Container = styled.div<{ small?: boolean }>`
  display: ${({ small }) => (small ? "inline-flex" : "flex")};
  ${({ small }) =>
    small
      ? css`
          width: 100px;
          height: inherit;
        `
      : ""}
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  .dot:nth-child(1) {
    animation: dotmove 0.75s infinite alternate;
  }
  .dot:nth-child(2) {
    animation: dotmove2 0.75s infinite alternate;
  }

  &.invert .dot {
    background-color: #215068;
  }

  @keyframes dotmove {
    0% {
      transform: translatex(30px);
    }
    100% {
      transform: translatex(-30px);
    }
  }
  @keyframes dotmove2 {
    0% {
      transform: translatex(-30px);
    }
    100% {
      transform: translatex(30px);
    }
  }
`;

export const Dot = styled.div<{ small?: boolean }>`
  transition: all 1s ease-in-out;
  ${({ small }) =>
    small
      ? css`
          height: 10px;
          width: 10px;
        `
      : css`
          height: 30px;
          width: 30px;
          position: absolute;
        `}
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.8;
`;
