import styled, { css } from "styled-components";

export const UploadImage = styled.p`
  margin-bottom: 0px;
  font-size: 14px;
  color: #777778;
  text-decoration: underline;
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;



export const NavbarContainer = styled.div`

  display: flex;
  min-height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  padding: 0px 32px;
  overflow: hidden;
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

  ${({ theme: { isDesktop } }) =>
    !isDesktop
      ? ``
      : css`
        flex-direction: column;
      `}
`;

;
