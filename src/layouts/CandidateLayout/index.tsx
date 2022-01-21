import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Menu from "components/DropMenu";
import LandingNavbar from "components/LandingNavbar";
import { NavLink } from "components/typography";
import { MainContainer, Avatar } from "components/structural";

import { ReactComponent as MenuIcon } from "assets/svg/sidebar_menu_icon.svg";

const CandidateLayout = ({ children }: any) => {
  const { isDesktop } = useContext(ThemeContext);
  return (
    <>
      <MainContainer>
        <LandingNavbar mode="dark">
          <NavLink uppercase to="/">
            <MenuIcon style={{ cursor: "pointer", marginRight: "10px" }} />
            {isDesktop ? "Resumap" : ""}
          </NavLink>
          <Menu>
            <Avatar
              isMain
              src="https://static.statusqueen.in/dpimages/thumbnail/dp_images_8-1279.jpg"
            />
          </Menu>
        </LandingNavbar>
        {children}
      </MainContainer>
    </>
  );
};

export default CandidateLayout;
