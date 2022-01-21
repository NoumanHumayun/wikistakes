import { useContext, useMemo, useState } from "react";
import upperFirst from "lodash/upperFirst";

import { useParams } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

import GenericLoader from "components/GenericLoader";
import LandingNavbar from "components/LandingNavbar";

import { BurgerMenu } from "components/burgermenu";
import { BreadLink, HeaderButtonText } from "components/typography";
import { HeaderButton } from "components/button/primary";
import {
  PageHeader,
  PageLabelAndBurger,
  Breadcrumb,
  NextArrowIcon,
} from "components/structural";

import Container from "./containers";
import { FETCH_JOB_CANDIDATE } from "./queries";
import { ReactComponent as TextOutlined } from "assets/svg/text_outlined.svg";

import ViewCandidate from "routes/Recruiter/ViewCandidate";

const View = () => {
  const { id, candidateId } = useParams<any>();
  const { isDesktop } = useContext(ThemeContext);

  const [isNotes, setNotes] = useState<boolean>(false);

  const { data, loading } = useQuery(FETCH_JOB_CANDIDATE, {
    variables: { jobId: id, candidateId },
    fetchPolicy: "network-only",
  });

  const { jobTitle, firstName, lastName }: any = useMemo(() => {
    if (!loading && data) {
      const { job, candidate } = data;
      return { ...job, ...candidate };
    }
    return {};
  }, [data, loading]);

  if (loading) return <GenericLoader invert />;

  return (
    <>
      <LandingNavbar>
        <PageHeader>
          <PageLabelAndBurger>
            {!isDesktop && <BurgerMenu />}
            <BreadLink to="/recruiter/jobs">Jobs</BreadLink>
          </PageLabelAndBurger>
          <Breadcrumb>
            {isDesktop && <NextArrowIcon />}
            <BreadLink width="22%" to={`/recruiter/jobs/${id}/view`}>
              {loading ? <GenericLoader small invert /> : jobTitle}
            </BreadLink>
            <NextArrowIcon />
            <BreadLink width="22%" to={`/recruiter/jobs/${id}/applicants`}>
              Applicants
            </BreadLink>
            <NextArrowIcon />
            <BreadLink width="22%" to="">
              {loading ? (
                <GenericLoader small invert />
              ) : (
                `${upperFirst(firstName)} ${upperFirst(lastName)}`
              )}
            </BreadLink>
          </Breadcrumb>
        </PageHeader>
        <HeaderButton onClick={() => setNotes(true)}>
          {isDesktop && <HeaderButtonText>Add Note</HeaderButtonText>}
          <TextOutlined />
        </HeaderButton>
      </LandingNavbar>
      <Container />
      {isNotes && (
        <ViewCandidate
          isOpen={isNotes}
          onClose={() => setNotes(false)}
          candidateId={candidateId}
        />
      )}
    </>
  );
};

export default View;
