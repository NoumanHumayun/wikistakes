import React from "react";
import { ThemeContext } from "styled-components";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "context/GlobalContext";
import { MainContainer } from "components/structural";
import {
  SidebarContainer,
  TitleContainer,
  Sidebar,
  SidebarItems,
  IconContainer,
  LogoutButton,
} from "./styled.components";
import { ReactComponent as MenuIcon } from "assets/svg/sidebar_menu_icon.svg";
import { ReactComponent as Job } from "assets/svg/job.svg";
import { ReactComponent as Canidates } from "assets/svg/candidates.svg";
import { ReactComponent as Database } from "assets/svg/database.svg";
import { ReactComponent as Settings } from "assets/svg/settings.svg";
import { ReactComponent as Logout } from "assets/svg/logout.svg";
import { CONTEXT } from "helpers/constants";

const RecruiterLayout = (props: any) => {
  const { children } = props;
  const { push, location } = useHistory();
  const { isDesktop } = React.useContext(ThemeContext);
  const [value, setValue] = React.useState(location.pathname);
  const { state, dispatch } = React.useContext(GlobalContext);
  const [token, setToken] = React.useState({});

  const handleClick = React.useCallback(
    (e: any) => {
      if (e.domEvent) {
        e.domEvent.stopPropagation();
      } else {
        e.stopPropagation();
      }
      setValue(e.key);
      push(e.key);
    },
    [push]
  );

  const onCollapse = React.useCallback(() => {
    dispatch({
      type: CONTEXT.SET_SIDEBAR_OPEN,
      data: false,
    });
  }, [dispatch]);

  const removeToken = () => {
    localStorage.clear();
    push("/")
    window.location.reload();
  };

  return (
    <React.Fragment>
      {(isDesktop || state.isSidebarOpen) && (
        <SidebarContainer onClick={onCollapse}>
          <Sidebar
            onClick={handleClick}
            selectedKeys={[value]}
            mode="inline"
            style={{ width: 236 }}
          >
            <TitleContainer>
              <MenuIcon style={{ marginRight: "8px" }} /> Resumap
            </TitleContainer>
            <SidebarItems key="/recruiter/jobs">
              <IconContainer>
                <Job />
              </IconContainer>{" "}
              Jobs
            </SidebarItems>
            <SidebarItems key="/recruiter/candidates">
              <IconContainer>
                <Canidates />
              </IconContainer>{" "}
              Candidates
            </SidebarItems>
            <SidebarItems key="/recruiter/database">
              <IconContainer>
                <Database />
              </IconContainer>{" "}
              Database
            </SidebarItems>
            <SidebarItems key="/recruiter/settings">
              <IconContainer>
                <Settings />
              </IconContainer>{" "}
              Settings
            </SidebarItems>
            <LogoutButton onClick={removeToken}>
              <Logout style={{ marginRight: "14px" }} /> Logout
            </LogoutButton>
          </Sidebar>
        </SidebarContainer>
      )}
      <MainContainer>{children}</MainContainer>
    </React.Fragment>
  );
};

export default RecruiterLayout;
