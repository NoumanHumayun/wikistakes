import { useContext, useState } from "react";

import { ThemeContext } from "styled-components";

import LandingNavbar from "components/LandingNavbar";
import { BurgerMenu } from "components/burgermenu";

import { BreadLink, HeaderButtonText } from "components/typography";
import { PageHeader, PageLabelAndBurger } from "components/structural";

import { HeaderButton } from "components/button/primary";
import { ReactComponent as Add } from "assets/svg/add.svg";

import CreateJob from "routes/Recruiter/CreateJob";

import Container from "./containers";

const View = () => {
  const { isDesktop } = useContext(ThemeContext);
  const [isCreateJobOpen, setCreateJob] = useState<boolean>(false);

  return (
    <>
      <LandingNavbar>
        <PageHeader>
          <PageLabelAndBurger>
            <BurgerMenu />
            <BreadLink to="/recruiter/jobs">Jobs</BreadLink>
          </PageLabelAndBurger>
        </PageHeader>

        <HeaderButton onClick={() => setCreateJob(true)}>
          <Add />
          {isDesktop && <HeaderButtonText>Create Job</HeaderButtonText>}
        </HeaderButton>
      </LandingNavbar>

      <Container />

      <CreateJob
        visible={isCreateJobOpen}
        handleCloseCreateJob={() => setCreateJob(false)}
      />
    </>
  );
};

export default View;
