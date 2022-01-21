import styled, { css } from "styled-components";
import PrimaryButton, { HeaderLink } from "../primary";

export const Button = styled(PrimaryButton)`
  background: #fff;
  border: 0px;
  color: #0a0529;
  padding: 14px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  gap: 5px;
  svg {
    width: 20px;
    height: 20px;
  }

  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          padding: 20px;
        `}
`;

export const Link = styled(HeaderLink)`
  background: #fff;
  border: 0px;
  color: #0a0529;
  padding: 14px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  gap: 5px;
  svg {
    width: 20px;
    height: 20px;
  }

  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          padding: 20px;
        `}
`;
