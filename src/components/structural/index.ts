import styled, { css } from "styled-components";
import { Input, Switch } from "antd";
import AntAvatar from "antd/lib/avatar/avatar";
import ModalAntd from "antd/es/modal/Modal";
import AntPagination from "antd/es/pagination/Pagination";
import AntRow from "antd/lib/row";
import AntCol from "antd/lib/col";
import Menu from "antd/lib/menu";
import AntTabs from "antd/lib/tabs";
import DrawerAnt from "antd/lib/drawer";
import { ReactComponent as Close } from "assets/svg/close.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow_down.svg";
import { Input as SampleInput } from "components/form";

export const Drawer = styled(DrawerAnt)`
  & .ant-drawer-content-wrapper {
    max-width: 480px;
    width: 100%;
  }

  & .ant-drawer-body {
    padding: 0px;
  }

  & .ant-tabs-tab-btn {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    height: 40px;
    display: flex;
    align-items: center;

    letter-spacing: 0.02em;

    color: rgba(1, 1, 2, 0.96);
  }
`;

export const Pagination = styled(AntPagination)`
  margin: 15px 0px;
  margin-left: auto;
  margin-right: auto;

  .ant-pagination-prev,
  .ant-pagination-next {
    padding-top: 3px;
  }

  .ant-pagination-item {
    border: none !important;
    background: transparent !important;
  }
`;

export const Avatar = styled(AntAvatar)<{ margin?: string; isMain?: boolean }>`
  margin: ${({ margin }) => margin || "0px"};
  ${({ theme: { isDesktop }, isMain }) =>
    isMain
      ? css`
          width: ${isDesktop ? "40px" : "32px"};
          height: ${isDesktop ? "40px" : "32px"};
          border: 2px solid #ffffff;
        `
      : ``}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1028px;
  width: 100%;
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? css`
          padding: 24px;
        `
      : css``}

  margin: 0 auto;
`;

export const NextArrowIcon = styled(Arrow)`
  margin: 0px 5px !important;
  transform: rotate(270deg);

  ${({ theme: { isDesktop } }) =>
    !isDesktop
      ? css`
          &:first-child {
            display: none;
          }
        `
      : ``}
`;

export const Breadcrumb = styled.span`
  align-items: center;
  display: flex;

  ${({ theme: { isDesktop } }) =>
    !isDesktop
      ? css`
          font-size: 16px;
          margin-bottom: 8px;
          max-width: 100%;
          overflow: hidden;
        `
      : ``}
`;

export const PageHeader = styled.header`
  overflow: hidden;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  ${({ theme: { isDesktop } }) =>
    !isDesktop
      ? css`
          flex-direction: column;
          margin-top: 15px;
          align-items: flex-start;
        `
      : ``}
`;

export const PageLabelAndBurger = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px 0px;
`;

export const Modal = styled(ModalAntd)<{ width?: any; top?: any }>`
  top: ${({ top }) => top || "55px"};
  & .ant-modal-content {
    padding: 64px 48px 32px;
    max-width: ${({ width }) => width || "576px"};
    background: #ffffff;
    border-radius: 16px;
  }

  & .ant-modal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
  }

  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ""
      : css`
          & .ant-modal-content {
            padding: 48px 24px 28px;
          }
        `}
`;

export const Row = styled(AntRow)<{
  alignItems?: "flex-end" | "baseline" | "center" | "flex-start" | "stretch";
  flexFlow?: "row wrap" | "row nowrap" | "wrap" | "nowrap" | "column";
  justifyContent?:
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around";
  gap?: string;
  rowGap?: string;
  margin?: string;
}>`
  &.dragger > span {
    flex: 1;
  }
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "24px"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-flow: ${({ flexFlow }) => flexFlow || "row wrap"};
  margin: ${({ margin }) => margin || "0"};
  row-gap: ${({ rowGap }) => rowGap || "3px"} !important;
`;

export const Column = styled(AntCol)<{ width?: string; margin?: string }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${(props) =>
    props.width
      ? css`
          max-width: ${props.width};
        `
      : ``}
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          width: 100%;
        `}
`;

export const Tag = styled.div<{ add?: boolean; reverse?: boolean }>`
  font-weight: 400;
  color: #0a0529;

  ${({ add }) => (add ? `background: #fff;` : `background: #f1f0f7;`)}
  ${({ reverse }) =>
    reverse &&
    `
  background: #0A0529; 
  color: #fff;
  font-weight: 600;
  `}
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 16px;

  font-size: 14px;
  line-height: 17px;
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          margin: 0 0 5px 0;
        `}
`;

export const TagButton = styled.button<{ add?: boolean; reverse?: boolean }>`
  font-weight: 400;
  color: #0a0529;

  ${({ add }) => (add ? `background: #fff;` : `background: #f1f0f7;`)}
  ${({ reverse }) =>
    reverse &&
    `
  background: #0A0529; 
  color: #fff;
  font-weight: 600;
  `}
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 16px;

  font-size: 14px;
  line-height: 17px;
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          margin: 0 0 5px 0;
        `}
`;
export const SidebarContainer = styled.div<{ open: boolean }>`
  display: inline-flex;
  flex-direction: column;
  /* color: #fff; */
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  transition: right 0.25s ease-in;
  box-shadow: 0px 4px 16px rgba(10, 5, 41, 0.05);
  background: #fff;
  ${({ open }) =>
    open
      ? `
    position: fixed;
    top: 0px;
    right: 0px;
    `
      : `position: absolute;
    top: 0px;
    right: -480px;`}
  z-index: 1050;
`;

export const Sidebar = styled(Menu)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #fff;
  border-right: 1px solid #fff;
  height: 100vh;

  .ant-menu-item-selected {
    background-color: white !important;
    color: #fff !important;
    border: 0px !important;
  }
  .ant-menu-item-selected::after {
    width: 0px;
    transform: scaleY(0) !important;
  }
`;

export const CloseIcon = styled(Close)`
  width: 14px;
  height: 14px;
  cursor: pointer;
  align-self: center;
  margin-left: auto !important;
`;

export const HeaderRow = styled(Row)`
  padding: 24px;
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          row-gap: 25px !important;
          max-height: 140px;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-start;
          padding: 20px;
        `}
`;

export const DrawerRow = styled(Row)`
  padding: 4px 14px;
  margin: 10px;
  justify-content: inherit;
`;

export const Tabs = styled(AntTabs)`
  width: 100% !important;
  .ant-tabs-nav::before {
    border-bottom: 0px !important;
  }
  .ant-tabs-nav .ant-tabs-nav-wrap {
    justify-content: center;
  }
  .ant-tabs-tab-btn {
    color: rgba(10, 5, 41, 0.32);
    letter-spacing: 0.02em;
    font-size: 16px;
    line-height: 19px;
    padding: 0px 15px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: rgba(1, 1, 2, 0.96);
    font-weight: bold;
  }
  .ant-tabs-ink-bar {
    width: 0px !important;
  }
  .ant-tabs-nav-operations .ant-tabs-nav-operations-hidden {
    display: none !important;
  }
  .ant-tabs-content-holder {
    overflow-y: auto;
    height: 76vh;
  }
`;

export const TableText = styled.p`
  padding: 0px;
  margin: 0px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #010102;
  display: flex;
  align-items: center;
  min-width: 124px;
  width: fit-content;
`;

export const CompanyTitle = styled(TableText)`
  font-weight: 700;
  margin: 0px 12px;
  font-size: 16px;
`;

export const HR = styled.span`
  border-bottom: 0.5px solid rgba(10, 5, 41, 0.32);
  width: 100%;
  margin: 8px 0px;
`;

export const SpaceVertical = styled.div`
  background: #f1f0f6;
  padding: 5px 0px;
`;

export const CustomColumn = styled(Column)<{ margin?: string }>`
  flex-direction: row;
  ${({ theme: { isDesktop }, margin }) =>
    isDesktop
      ? `${margin && `margin: ${margin};`}`
      : css`
          flex-direction: column;
          width: 100%;

          ${margin && `margin: ${margin};`}
        `}
`;

export const SearchColumn = styled(Column)`
  width: 100%;
  ${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
          padding: 16px;
        `}
`;

export const CustomRow = styled(Row)<{ margin?: string }>`
  ${({ theme: { isDesktop }, margin }) =>
    isDesktop
      ? css`
          ${!!margin &&
          css`
            margin: ${margin};
          `}
        `
      : css`
          flex-direction: column !important;
        `}
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;

  ${({ theme: { isDesktop } }) =>
    !isDesktop
      ? css`
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0px 16px;
          height: 64px;
          border-bottom: 0.5px solid rgba(10, 5, 41, 0.32);
        `
      : css`
          width: 252px;
          border-right: 0.5px solid rgba(10, 5, 41, 0.32);
        `}
`;

export const MainContainer = styled.main<{ blur?: boolean }>`
  margin: 30px;
  filter: ${({ blur }) => blur && "blur(2px)"};
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

export const AccountBlock = styled(Row)`
  border: 1px solid #777778;
  border-radius: 8px;
  padding: 25px 30px;
`;

export const NumberInput = styled(SampleInput)`
  width: 86%;
  @media (max-width: 576px) {
    width: 65%;
  }
`;

export const JobContainer = styled.div`
  max-width: 876px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  @media (max-width: 576px) {
    padding: 0px;
  }
`;

export const UploadYourResume = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 608px;
height: 80px;
left: 0px;
top: 51px;
background: #F1F0F7;
border-radius: 8px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 16px 0px;
${({ theme: { isDesktop } }) =>
!isDesktop
  ? css`
  width: 343px;
  height: 80px;`
  : ``}
`;