import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import SettingsContainer from "./components/SettingsContainer";
import LandingNavbar from "components/LandingNavbar";
import {
  Tabs,
  MainContainer,
  BurgerMenu,
  NavLabel,
} from "./components/styled.component";
import { GlobalContext } from "context/GlobalContext";
import { CONTEXT } from "helpers/constants";

const { TabPane } = Tabs;
const EditProfile = () => {
  const { push } = useHistory();
  const [currPage, setCurrPage] = React.useState(1);
  const { dispatch } = React.useContext(GlobalContext);
  const { isDesktop } = useContext(ThemeContext);

  function callback(key: string) {
    setCurrPage(parseInt(key));
  }
  const handleOpenSideBar = React.useCallback(() => {
    dispatch({
      type: CONTEXT.SET_SIDEBAR_OPEN,
      data: true,
    });
  }, [dispatch]);
  const redirectSettings = React.useCallback(() => {
    push("/recruiter/settings");
  }, [push]);

  return (
    <React.Fragment>
      {!isDesktop && <LandingNavbar dontShow>
        <NavLabel>
          <BurgerMenu onClick={handleOpenSideBar} />
          <span style={{ cursor: "pointer" }} onClick={redirectSettings}>
            Settings
          </span>
        </NavLabel>
      </LandingNavbar>}
      <LandingNavbar>
        <Tabs defaultActiveKey="1" onChange={callback} style={{width: '100%'}}>
          <TabPane tab="Edit Profile" key={1} />
          <TabPane tab="Password" key={2} />
          <TabPane tab="Notifications" key={4} />
          <TabPane tab="Account" key={6} />
        </Tabs>
      </LandingNavbar>
      <MainContainer>
        <SettingsContainer currPage={currPage} />
      </MainContainer>
    </React.Fragment>

  );
};

export default EditProfile;
