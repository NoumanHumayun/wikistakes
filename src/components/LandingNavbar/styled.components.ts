import styled, { css } from "styled-components";

export const NavbarContainer = styled.div<{
  dontShow?: boolean;
  transparent?: boolean;
  mode?: string;
}>`
  ${({ theme: { isDesktop }, dontShow }) =>
    isDesktop
      ? ""
      : css`
          ${dontShow && `display: none;`}
        `}

  display: flex;
  min-height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${({ mode }) => (mode === "dark" ? "#0A0529" : "white")};
  background-color: ${({ transparent }) => transparent && "transparent"};
  border-bottom: 0.5px solid rgba(10, 5, 41, 0.32);
  padding: 0px 32px;
  overflow:hidden;
  .ant-menu-horizontal {
    border: 0px;
  }
  .ant-menu-item {
    color: rgba(10, 5, 41, 0.32);
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.04em;
    font-weight: 400;

    font-family: Lato;
    border-bottom: 0px !important;
    &:hover {
      border: 0px !important;
      color: #0a0529 !important;
      text-decoration: none;
    }
  }
  .ant-menu-item-selected {
    border: 0px !important;
    color: #0a0529 !important;
    font-weight: 700;
    text-decoration: none;
  }

  ${({ theme: { isDesktop }, dontShow }) =>
    isDesktop
      ? ""
      : css`
          padding: 0px 18px;
        `}
`;

export const TitleContainer = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: Lato;
`;
