import React from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "context/GlobalContext";
import DbContainer from "./containers";
import LandingNavbar from "components/LandingNavbar";
import { NavLabel } from "./components/styled.components";
import { BurgerMenu } from "components/burgermenu";
import { CONTEXT } from "helpers/constants";

const Database = () => {
  const { push } = useHistory();
  const { dispatch } = React.useContext(GlobalContext);

  const handleOpenSideBar = React.useCallback(() => {
    dispatch({
      type: CONTEXT.SET_SIDEBAR_OPEN,
      data: true,
    });
  }, [dispatch]);

  const redirectDatabase = React.useCallback(() => {
    push("/recruiter/database");
  }, [push]);

  return (
    <>
      <LandingNavbar>
        <NavLabel>
          <BurgerMenu  />
          <span style={{ cursor: "pointer" }} onClick={redirectDatabase}>
            Database
          </span>
        </NavLabel>
      </LandingNavbar>
      <DbContainer />
    </>
  );
};

export default Database;
