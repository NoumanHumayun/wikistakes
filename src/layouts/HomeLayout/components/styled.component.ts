import styled from "styled-components";
import { Label } from "components/typography";
import { Row, Column } from "components/structural";
import AntTabs from "antd/lib/tabs";
import { ReactComponent as Burger } from "assets/svg/burger.svg";

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

export const AppLabel = styled(Label)<{ webonly?: boolean }>`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  color: rgba(1, 1, 2, 0.96);
  cursor: pointer;

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

export const Tabs = styled(AntTabs)<{ border?: boolean }>`
  max-width: fit-content;
  width: 100% !important;
  margin: auto;
  overflow-x: hidden;

  .ant-tabs-nav::before {
    border-bottom: 0px !important;
  }
  .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-around;
    margin-top: 15px;
    overflow-x: hidden;
  }
  .ant-tabs-tab-btn {
    color: #fff;
    font-weight: 300;
    letter-spacing: 0.04em;
    font-size: 18px;
    line-height: 21.6px;
    border: ${({ border }) => border && "2px solid red"};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff;
    font-weight: bold;
  }
  .ant-tabs-ink-bar {
    width: 0px !important;
  }
`;

export const MainContainer = styled.div<{ blur?: boolean }>`
  width: 80%;

  height: 88%;
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

export const UserAvatar = styled.img<{ size?: string }>`
  width: ${({ size }) => size || "32px"};
  height: ${({ size }) => size || "32px"};
  border-radius: 50%;
  object-fit: cover;
  @media (min-width: 577px) {
    margin-right: 32px;
  }
`;

export const ResumeOverlay = styled(Row)<{ display?: string }>`
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 16px !important;
  position: fixed;
  bottom: 0px;
  height: 160px;
  background-color: #0a0529;
`;

export const UploadButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 14px 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  cursor: pointer;
`;

export const OverlayText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(255, 255, 255, 0.56);
  font-size: 16px;
  line-height: 28px;
  cursor: pointer;
`;
