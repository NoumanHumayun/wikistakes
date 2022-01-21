import React from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "context/GlobalContext";
import Container from "./containers";
import { ThemeContext } from "styled-components";
import { PageHeading } from "./components/styled.component";

import { CONTEXT } from "helpers/constants";

const Launch = () => {
  const { dispatch } = React.useContext(GlobalContext);

  const handleOpenSideBar = React.useCallback(() => {
    dispatch({
      type: CONTEXT.SET_SIDEBAR_OPEN,
      data: true,
    });
  }, [dispatch]);

  return <Container />;
};

export default Launch;
