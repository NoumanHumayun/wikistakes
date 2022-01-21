import styled, { css } from "styled-components";
import { Label } from "components/typography";
import { Row, Column } from "components/structural";
import { ReactComponent as Burger } from "assets/svg/burgerWhite.svg";

export const NavLabel = styled(Label)<{
  uppercase?: boolean;
  webonly?: boolean;
}>`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  color: #fff;
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  margin: auto;
  @media (max-width: 576px) {
    display: ${({ webonly }) => webonly && "none"};
  }
`;

export const CustomColumn = styled(Column)<{
  mobileonly?: boolean;
  webonly?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 576px) {
    flex-direction: row;
    width: 100%;
    display: ${({ webonly }) => webonly && "none"};
  }
  @media (min-width: 577px) {
    display: ${({ mobileonly }) => mobileonly && "none"};
  }
`;

export const CustomRow = styled(Row)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  row-gap: 32px !important;
`;

export const BurgerMenu = styled(Burger)`
  cursor: pointer;
`;

export const MainContainer = styled.div<{ blur?: boolean }>`
  border-radius: 16px;
  flex: 1;
  ${({ blur, theme: { isDesktop } }) =>
    isDesktop
      ? ""
      : css`
          width: 100%;
          border-radius: 0px;
          margin: 10px 0px;
          padding: 0px 0px;
          ${blur && "filter: blur(2px);"}
        `}
`;

export const UserAvatar = styled.img<{ size?: string }>`
  width: ${({ size }) => size || "32px"};
  height: ${({ size }) => size || "32px"};
  border: 2px solid #ffffff;
  border-radius: 50%;
  object-fit: cover;
  @media (min-width: 577px) {
  }
`;
