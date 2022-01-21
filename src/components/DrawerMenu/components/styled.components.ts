import styled from "styled-components";
import Menu from "antd/lib/menu";
import AntTabs from "antd/lib/tabs";
import { ReactComponent as Close } from "assets/svg/closeMenu.svg";

export const SidebarContainer = styled.div<{ open: boolean }>`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  transition: left 0.25s ease-in;
  ${({ open }) =>
    open
      ? `
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: rgba(1, 1, 2, 0.9);
      width: 100%;
    `
      : ``}
  z-index: 1050;
`;

export const Sidebar = styled(Menu)`
  max-width: 480px;
  border: none !important;
  height: inherit;
  .ant-tabs {
    height: inherit;
  }
  .ant-menu-item-selected {
    color: #fff !important;
    border: 0px !important;
  }
  .ant-menu-item-selected::after {
    width: 0px;
    transform: scaleY(0) !important;
  }
`;

export const TitleContainer = styled.div`
  background-color: rgba(10, 5, 41, 1);
  padding: 50px 0px 20px 32px;
`;

export const CloseIcon = styled(Close)`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const Tabs = styled(AntTabs)`
  width: 100% !important;
  background-color: rgba(10, 5, 41, 1);
  color: rgba(255, 255, 255, 0.32);
  .ant-tabs-tab {
    margin: 0px;
  }
  .ant-tabs-nav::before {
    border-bottom: 0px !important;
  }
  .ant-tabs-nav-list {
    flex-direction: column;
    width: 100%;
  }
  .ant-tabs-nav .ant-tabs-nav-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
  .ant-tabs-tab-btn {
    margin: 0px 20px;
    width: 100%;
    letter-spacing: 0.04em;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    padding: 10px 15px;
    border-bottom: 0.5px solid #45415c;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff;
    font-weight: 700;
  }
  .ant-tabs-ink-bar {
    width: 0px !important;
  }
  .ant-tabs-nav-operations .ant-tabs-nav-operations-hidden {
    display: none !important;
  }
`;
