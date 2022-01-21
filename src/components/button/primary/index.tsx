import { FC } from "react";
import Spin from "antd/lib/spin";
import styled, { css } from "styled-components";
import { Button, Link } from "./index.styled";

interface Props {
  children: any;
  width?: string;
  style?: any;
  onClick?: any;
  loading?: boolean;
  padding?: string;
  disabled?: boolean;
  background?: string;
}

const ButtonComponent: FC<Props> = ({ children, loading, ...props }) => {
  return (
    <Button {...props}>
      {loading && <Spin size="small" style={{ marginRight: "5px" }} />}
      {children}
    </Button>
  );
};

export default ButtonComponent;

export const HeaderButton = styled(ButtonComponent)<{ slim?: boolean }>`
  background: #0a0529;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(176, 190, 197, 0.24);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 0px 14px;
  &:focus {
    border-radius: 8px;
    outline: 0px;
  }
  & svg {
    stroke: #f1f0f7;
    ${({ theme: { isDesktop } }) =>
      isDesktop
        ? css`
            margin-right: 8px;
            height: 20px;
            min-width: 20px;
          `
        : css`
            margin-right: 0px;
            height: 16px;
            min-width: 16px;
          `}
  }
  ${({ slim }) =>
    slim
      ? css`
          height: 40px !important;
        `
      : ""}
`;

export const HeaderLink = styled(Link)<{ slim?: boolean }>`
  background: #0a0529;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(176, 190, 197, 0.24);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;

  &:focus {
    border-radius: 8px;
    outline: 0px;
  }
  & svg {
    stroke: #f1f0f7;
    ${({ theme: { isDesktop } }) =>
      isDesktop
        ? css`
            margin-right: 8px;
            height: 20px;
            min-width: 20px;
          `
        : css`
            margin-right: 0px;
            height: 16px;
            min-width: 16px;
          `}
  }
  ${({ slim }) =>
    slim
      ? css`
          padding: 0px 14px;
          height: 40px;
        `
      : css`
          padding: 0px 14px;
        `}
`;


export const DeleteButton = styled(Button) <{ color?: string; bg?: string, border?: string }>`
  border: ${({ border }) => border || 'none'};
  border-radius: 8px;
  background: ${({ bg }) => bg || "#f1f0f6"};
  color: ${({ color }) => color || "rgba(1, 1, 2, 0.96)"};
`;

export const ScheduleButton = styled(Button) <{ color?: string; bg?: string, border?: string }>`
  border: ${({ border }) => border || 'none'};
  border-radius: 8px;
  background: ${({ bg }) => bg || "#f1f0f6"};
  color: ${({ color }) => color || "rgba(1, 1, 2, 0.96)"};
  @media (max-width: 576px) {
    width: 100%;
  }
`;