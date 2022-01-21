import styled, { css } from "styled-components";
import Menu from "antd/lib/menu";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  min-width: 236px;
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ""
      : css`
          transition: left 0.25s ease-in;
          z-index: 100;
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: rgba(1, 1, 2, 0.9);
          width: 100%;
        `}
`;

export const Sidebar = styled(Menu)`
  display: flex;
  flex-direction: column;
  background-color: #0a0529;
  color: #fff;
  border-right: 1px solid #0a0529;
  height: 100vh;
  background-color: #0a0529;
  .ant-menu-item-selected {
    background-color: white !important;
    color: #0a0529 !important;
    border: 0px !important;
  }
  .ant-menu-item-selected::after {
    width: 0px;
    transform: scaleY(0) !important;
  }
`;
export const SidebarItems = styled(Menu.Item)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;
  padding: 0px 16px 0px 32px !important;
  height: 56px !important;
  margin: 0px !important;
  &:hover {
    background-color: white;
    color: #0a0529;
  }
`;

export const IconContainer = styled.div`
  margin-right: 14px;
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0px 16px 0px 32px;
  margin: 70px 0px;
`;
export const LogoutButton = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 0px 16px 0px 32px;
  display: flex;
  align-items: center;
  height: 56px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: absolute;
  width: 236px;
  bottom: 47px;
  &:hover {
    background-color: white;
    color: #0a0529;
  }
`;
