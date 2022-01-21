import styled, { css } from "styled-components";
import Button from "components/button/primary";
import { Label } from "components/typography";
import { Row } from "components/structural";
import AntTabs from "antd/lib/tabs";
import { Input, Switch } from "antd";
import { Input as SampleInput } from "components/form";
import { ReactComponent as Burger } from "assets/svg/burger.svg";

export const NavLabel = styled(Label)`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const BurgerMenu = styled(Burger)`
  margin-right: 18px;
  cursor: pointer;
  @media (min-width: 577px) {
    display: none;
  }
`;

export const Tabs = styled(AntTabs)`
  overflow-x: scroll;
  .ant-tabs-nav::before{
      border: none !important;
  }

  .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-between;
    margin-top: 15px;
    overflow-x: scroll;
  }
  .ant-tabs-tab-btn {
  ${({ theme: { isDesktop } }: any) =>
    isDesktop
      ? css`
          color: rgba(10, 5, 41, 0.32);
          font-weight: 700;
          letter-spacing: 2%;
          font-size: 18px;
          line-height: 28px;
        `
      : ``}
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: rgba(1, 1, 2, 0.96);
    font-weight: bold;
  }
  .ant-tabs-ink-bar {
    width: 0px !important;
  }

`;

export const MainContainer = styled.div`
  width: 80%;
  background: #fff;
  margin: 5% 10%;
  padding: 77px 64px;
  border-radius: 16px;
  @media (max-width: 576px) {
    width: 100%;
    border-radius: 0px;
    margin: 10px 0px;
    padding: 48px 16px;
  }
`;

export const ImageContainer = styled.div<{ src: string }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src || ""});
`;

export const ImageDataContainer = styled.div`
  display: inline-flex;
  margin-left: 15px;
`;

export const CompanyHeading = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(1, 1, 2, 0.96);
`;

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

export const PrefixInput = styled(Input)`
  width: 90px;
  height: 48px;
  background: #f1f0f7;
  border: 0.5px solid rgba(10, 5, 41, 0.12) !important;
  box-shadow: none !important;
  border-radius: 8px;
  padding-left: 12px;
  .ant-input {
    background: #f1f0f7;
  }
`;

export const NumberInput = styled(SampleInput)`
  width: 86%;
  @media (max-width: 576px) {
    width: 65%;
  }
`;

export const ToggleSwitch = styled(Switch)`
  background: #c4c3cc;
  width: 32px;
  height: 14px;
  border: 0px solid #c4c3cc !important;
  box-shadow: none !important;
  .ant-switch-handle::before {
    background-color: #0a0529;
    width: 20px;
    height: 20px;
    top: -4px;
    left: -1px;
    :checked {
      background-color: red;
    }
  }
`;

export const CustomLabel = styled.label<{
  fullWidth?: boolean;
  color?: string;
}>`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: ${({ color }) => color || "#777778"};
  word-break: break-word;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "80%")};
`;

export const JobLabel = styled(CustomLabel)`
  color: #010102;
`;

export const AccountBlock = styled(Row)`
  border: 1px solid #777778;
  border-radius: 8px;
  padding: 25px 30px;
`;
