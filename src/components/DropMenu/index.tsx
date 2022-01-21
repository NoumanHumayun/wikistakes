import Popover from "antd/lib/popover";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  .menu {
    & .ant-popover-arrow{
      display: none;;
    }

    & .ant-popover-inner {
      background-color: #fff;
      border-radius: 1px !important;
      border-color: #fff !important;
    }

    & .ant-popover-inner-content{
      padding: 12px 16px !important;
      color: rgba(0, 0, 0, 0.85) !important;
    }

    & .ant-popover-inner-content a{
      display: block;
      padding: 10px;
      white-space: nowrap;
    }

    & .ant-popover-inner-content a:not(:last-child){
      border-bottom: 1px solid #CCC;
    }
  }
`;

const content = (
  <>
    <Link to="/candidate/settings/profile">Profile</Link>
    <Link to="/candidate/settings/password">Password Change</Link>
    <Link to="/candidate/settings/notifications">Notifications</Link>
    <Link to="/candidate/settings/account">Account</Link>
    <Link
      onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
      to="/signin"
    >
      Logout
    </Link>
  </>
);

const Menu = ({ children }: any) => {
  return (
    <>
      <Popover
        className="menu"
        content={content}
        trigger="click"
        destroyTooltipOnHide
        getPopupContainer={(trigger) => trigger}
      >
        <Global />
        {children}
      </Popover>
    </>
  );
};

export default Menu;
