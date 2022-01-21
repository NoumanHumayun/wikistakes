import { useState, useCallback, useMemo, useContext } from "react";
import { ThemeContext } from "styled-components";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

import { ButtonText } from "components/typography";
import { Row, Container } from "components/structural";
import CreateJob from "routes/Recruiter/CreateJob";
import { HeaderLink } from "components/button/primary";
import EditButton from "components/button/secondary";

import { ReactComponent as EditIcon } from "assets/svg/edit.svg";
import { ReactComponent as CandidatesIcon } from "assets/svg/candidates.svg";
import { ReactComponent as DropDownArrow } from "assets/svg/arrow_down.svg";

import { SelectInput } from "components/SelectInput";

import JobView from "../components";

import { GET_JOB } from "../queries";
import { JOB_STATUSES_CREATE } from "../mutation";
import GenericLoader from "components/GenericLoader";

const JContainer = () => {
  const { id } = useParams<any>();
  const { isDesktop } = useContext(ThemeContext);
  const [isEditing, setEditing] = useState(false);
  const [jobStatusCreate] = useMutation(JOB_STATUSES_CREATE);

  const { data, loading, refetch } = useQuery<any>(GET_JOB, {
    variables: { id },
    fetchPolicy: "no-cache",
  });

  const handleChange = useCallback(
    async (val: any) => {
      await jobStatusCreate({
        variables: { input: { jobId: id, status: val } },
      });
      refetch();
    },
    [id, jobStatusCreate, refetch]
  );

  const { job: { applied, statuses } = { applied: 0, statuses: [] } } =
    data ?? {};

  const jobStatuses = useMemo(
    () => [
      { label: "Open", value: "OPEN" },
      { label: "Closed", value: "CLOSED" },
      { label: "Draft", value: "DRAFT" },
      { label: "Canceled", value: "CANCELED" },
    ],
    []
  );

  if (loading) return <GenericLoader invert />;

  return (
    <>
      <Container>
        <Row margin={isDesktop ? "40px 0px 14px 0px" : "20px 16px 4px 16px"}>
          <EditButton onClick={() => setEditing(true)}>
            <ButtonText>Edit Job</ButtonText>
            <EditIcon />
          </EditButton>
          <Row gap="0">
            <HeaderLink to="applicants">
              <ButtonText>Applicants </ButtonText>({applied})
              <CandidatesIcon />
            </HeaderLink>
            <SelectInput
              onChange={handleChange}
              placeholder="Status"
              suffixIcon={<DropDownArrow />}
              value={statuses[0]?.status}
              options={jobStatuses}
            />
          </Row>
        </Row>
        <JobView data={data?.job ?? {}} />
      </Container>
      {isEditing && (
        <CreateJob
          visible={isEditing}
          handleCloseCreateJob={() => {
            setEditing(false);
            refetch();
          }}
        />
      )}
    </>
  );
};

export default JContainer;
