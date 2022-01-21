import React from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";
import LandingNavbar from "components/LandingNavbar";
import { MainContainer, Row, Avatar } from "components/structural";
import { NavLink } from "components/typography";
import { getDataFromLocalStorage } from "helpers/general";
import { Tabs, BurgerMenu } from "./components/styled.component";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { Footer } from "antd/lib/layout/layout";

const { TabPane } = Tabs;
const HomeLayout = (props: any) => {
  const isDesktop = true; //React.useContext(ThemeContext);
  const loggedin = getDataFromLocalStorage("token");
  const { children } = props;
  const { push, location } = useHistory();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleTabChange = React.useCallback(
    (key: string) => {
      setMenuOpen(false);
      push(key);
    },
    [push]
  );

  return (
    <>
      <MainContainer>
        <LandingNavbar transparent>
          {!isDesktop && (
            <BurgerMenu onClick={() => setMenuOpen(!isMenuOpen)} />
          )}
          <NavLink to="/">
            <Logo width="80%" style={isDesktop ? { marginRight: "8px" } : {}} />
          </NavLink>

          {isDesktop && (
            <Tabs
              defaultActiveKey={location?.pathname}
              onChange={handleTabChange}
            >
              <TabPane tab="For Creators" key="/" />
              <TabPane tab="Resources" key="/resources" />
              <TabPane tab="Featured" key="/featured" />
              <TabPane tab="LOG IN" key="/signin" />
              <TabPane tab="SIGN UP" key="/signup" />
            </Tabs>
          )}

          {/* {loggedin ? (
          <Row gap="14px">
            {isDesktop && (
              <NavLink to="/candidate/applications" invert>
                Applications
                <JobIcon style={{ margin: "12px" }} />
              </NavLink>
            )}
            <Menu>
              <Avatar
                src="https://static.statusqueen.in/dpimages/thumbnail/dp_images_8-1279.jpg"
                isMain
              />
            </Menu>
          </Row>
        ) : (
          <NavLink to="/signin">
            {isDesktop && "Log In"} <LoginIcon style={{ marginLeft: "10px" }} />
          </NavLink>
        )} */}
        </LandingNavbar>

        {children}
      </MainContainer>
    </>
  );
};

export default HomeLayout;
