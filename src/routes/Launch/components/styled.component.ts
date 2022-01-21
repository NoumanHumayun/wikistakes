import styled, { css } from "styled-components";
import Button from "components/button/primary";
import { Label } from "components/typography";
import { Row, Column } from "components/structural";
import AntTabs from "antd/lib/tabs";
import { Input, Switch } from "antd";
import { Input as SampleInput } from "components/form";
import { ReactComponent as Burger } from "assets/svg/burger.svg";
import AntSelect from "antd/lib/select";

export const Bullets = styled.p<{ bold?: boolean }>`
  font-family: "Gotham";
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-size: 14px;
  line-height: 30px;
  color: #fff;
  margin: auto;
  text-align: left;
  letter-spacing: 0.1em;
`;

export const ColumnHead = styled.h3<{ bold?: boolean }>`
  font-family: "Gotham";
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin: auto;
  text-align: left;
  letter-spacing: 0.01em;
`;

export const SelectInput = styled(AntSelect)<{ width?: string }>`
  min-width: 160px;
  width: ${({ width }) => (width ? width : "50%")};
  height: 40px !important;

  display: flex;
  align-items: center;
  background: #ffffff;

  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 20px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 4px;

  .ant-select-selector {
    border: 0px !important;
    background-color: transparent !important;
    outline: 0px !important;
    box-shadow: none !important;
    height: 48px;
  }

  .ant-select-clear {
    background: transparent;
  }

  .ant-select-arrow {
    top: 50%;
    right: 15px;
  }
`;

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
  color: #0a0529;
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  margin: auto;
  @media (max-width: 576px) {
    display: ${({ webonly }) => webonly && "none"};
  }
`;

export const CustomRow = styled(Row)`
  @media (max-width: 576px) {
    flex-direction: column !important;
  }
`;

export const CustomColumn = styled(Column)<{ margin?: string }>`
  flex-direction: row;
  align-items: flex-start;
  ${({ theme: { isDesktop }, margin }) =>
    isDesktop
      ? `${margin && `margin: ${margin};`}`
      : css`
          flex-direction: column;
          width: 100%;

          ${margin && `margin: ${margin};`}
        `}
`;

export const BurgerMenu = styled(Burger)`
  cursor: pointer;
`;

export const Tabs = styled(AntTabs)<{ webonly?: boolean }>`
  width: 90% !important;
  margin: auto;
  overflow-x: scroll;
  .ant-tabs-nav::before {
    border-bottom: 0px !important;
  }
  .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-between;
    margin-top: 15px;
    overflow-x: scroll;
  }
  .ant-tabs-tab-btn {
    color: rgba(10, 5, 41, 0.32);
    font-weight: 400;
    letter-spacing: 0.04em;
    font-size: 16px;
    line-height: 28px;
    text-transform: uppercase;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #0a0529;
    font-weight: bold;
  }
  .ant-tabs-ink-bar {
    width: 0px !important;
  }
  .ant-tabs-nav-operations .ant-tabs-nav-operations-hidden {
    display: none !important;
  }
  @media (max-width: 576px) {
    display: ${({ webonly }) => webonly && "none"};
  }
`;

export const MainContainer = styled.div<{ blur?: boolean }>`
  width: 80%;

  height: 100%;
  margin: 0px 10%;
  padding: 77px 64px;
  border-radius: 16px;
  @media (max-width: 576px) {
    width: 100%;
    border-radius: 0px;
    margin: 10px 0px;
    padding: 0px 0px;
    filter: ${({ blur }) => blur && "blur(2px)"};
  }
`;

export const PageHeading = styled.h3<{ webonly?: boolean }>`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  margin: 64px 0px 40px 0px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.04em;

  color: rgba(1, 1, 2, 0.96);
  @media (max-width: 576px) {
    display: ${({ webonly }) => webonly && "none"};
  }
`;

export const SearchColumn = styled(Column)`
  width: 100%;
  @media (max-width: 576px) {
    padding: 10px 0px;
  }
`;

export const ScheduleButton = styled(Button)<{
  color?: string;
  bg?: string;
  border?: string;
}>`
  border: ${({ border }) => border || "none"};
  border-radius: 8px;
  background: ${({ bg }) => bg || "#f1f0f6"};
  color: ${({ color }) => color || "rgba(1, 1, 2, 0.96)"};
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const DeleteButton = styled(Button)<{
  color?: string;
  bg?: string;
  border?: string;
}>`
  border: ${({ border }) => border || "none"};
  border-radius: 8px;
  background: ${({ bg }) => bg || "#f1f0f6"};
  color: ${({ color }) => color || "rgba(1, 1, 2, 0.96)"};
`;

export const AdditionalHeader = styled.h3`
  margin-top: 32px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 4%;
  line-height: 19px;
  color: rgba(10, 5, 41, 0.32);
`;

export const PrefixInput = styled(SampleInput)`
  width: 100%;
  height: 40px;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.12) !important;
  box-shadow: none !important;
  border-radius: 20px;
  margin: auto;
  padding-left: 12px;
  .ant-input {
    background: #f1f0f7;
  }
`;

export const TableCardContent = styled.div<{ flex?: boolean }>`
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
  ${({ flex }) => flex && `display: flex`}
`;

export const TableCardAvatarContainer = styled.div`
  justify-content: space-between;
`;
