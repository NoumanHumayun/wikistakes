import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 16px 0 0 0;
`;

export const Card = styled.div`
  padding: 24px;
  background: #ffffff;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-shadow: 0px 4px 16px rgba(10, 5, 41, 0.05);
  border-radius: 16px;
  margin: 15px;
  display: flex;
  flex-direction: column;
`;

export const ViewCard = styled.div<{ margin?: string }>`
  padding: 96px 64px 48px;
  min-width: 40%;
  margin: ${({ margin }) => (margin ? margin : "12px 0px 0px 0px")};
  border-radius: 16px;
  background-color: #fff;
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          padding: 56px 16px;
          border-radius: 0px;
        `}
`;
