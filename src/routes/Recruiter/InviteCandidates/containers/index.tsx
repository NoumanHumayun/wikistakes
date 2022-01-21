import React from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client/react/hooks/useLazyQuery";
import { useMutation } from "@apollo/client/react/hooks/useMutation";

import Snackbar from "components/notification";
import GenericLoader from "components/GenericLoader";

import { useThrottle } from "helpers/index";
import { Row, Column, Avatar } from "components/structural";
import { H2, Para, Separator } from "components/typography";
import { ReactComponent as DeleteIcon } from "assets/svg/delete.svg";

import {
  InviteCandidateModal,
  AutoComplete,
  InviteButton,
  CancelButton,
  SearchIcon,
  CandidatesContainer,
  CandidateHeading,
  CompanyHeading,
  Location,
} from "../components/styled.components";

import { FETCH_CANDIDATES } from "../queries";
import { INVITE_CANDIDATES } from "../mutations";

interface InviteCandidateProps {
  visible: boolean;
  handleCloseInviteCandidate: () => void;
}

const renderItem = ({ id, label, avatar, location }: any) => ({
  id,
  avatar,
  location,
  key: id,
  value: label,
  label: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar
        style={{ backgroundColor: "#87d068", marginRight: "5px" }}
        icon={String(label).charAt(0)}
        src={avatar ? `https://apis.resumaps.com/file/${avatar}/50/50` : null}
      />
      {label}
    </div>
  ),
});

const Container = (props: InviteCandidateProps) => {
  const { visible, handleCloseInviteCandidate } = props;
  const { id: jobId } = useParams<{ id: string }>();
  const [selectedCandidates, setSelectedCandidates] = React.useState<any[]>([]);
  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

  const [searchCandidates, { loading, data }] = useLazyQuery(FETCH_CANDIDATES);
  const [inviteCandidates, { data: invited, loading: inviting }] = useMutation(
    INVITE_CANDIDATES
  );

  const candidates = React.useMemo(() => {
    if (!loading && data?.candidates) {
      return data.candidates.map(
        ({ id, firstName, lastName, location, avatar }: any) => ({
          id,
          key: id,
          label: `${firstName} ${lastName}`,
          location,
          avatar,
        })
      );
    }
    return [];
  }, [data, loading]);

  const onSubmit = React.useCallback(
    async (event: React.FocusEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const candidateIds = (selectedCandidates ?? []).map(
          ({ id }: any) => id
        );
        await inviteCandidates({ variables: { jobId, candidateIds } });
      } catch (error) {
        console.error(error);
        setSnackbarData({
          message: "Error",
          description: error.message || "",
          type: "error",
          show: true,
        });
      }
    },
    [selectedCandidates, inviteCandidates, jobId]
  );

  const handleCloseSnackbar = React.useCallback(() => {
    setSnackbarData((prevState: any) => {
      return {
        ...prevState,
        show: false,
      };
    });
  }, []);

  const throttledSearch = useThrottle(
    async (firstName: string) =>
      searchCandidates({ variables: { limit: 10, offset: 0, firstName } }),
    1000
  );

  const onSearch = React.useCallback(
    (searchText: string) => throttledSearch(searchText),
    [throttledSearch]
  );

  const removeCandidate = React.useCallback((candidateId: any) => {
    setSelectedCandidates((prevState) => {
      return prevState.filter(
        (filteredCandidate: any) => filteredCandidate.key !== candidateId
      );
    });
  }, []);

  const onSelect = React.useCallback((_: string, option: any) => {
    setSelectedCandidates((_prev: any[]) => {
      if (_prev.some((_old) => _old.id === option.id)) {
        return _prev;
      }
      return [..._prev, option];
    });
  }, []);

  const options = React.useMemo(
    () => (candidates ?? []).map((candidate: any) => renderItem(candidate)),
    [candidates]
  );

  return (
    <>
      <InviteCandidateModal
        visible={visible}
        footer={null}
        closable={false}
        width="576px"
        top="20px"
      >
        <H2>Invite Candidate(s)</H2>
        <Separator />
        {inviting && !invited &&<Row justifyContent="center" margin="20px 20px"> <GenericLoader invert /></Row>}
        {!inviting && invited?.inviteCandidates && (
          <>
            <Para margin="10px 0px 26px 0px">All the invitations are sent.</Para>
            <InviteButton
              onClick={handleCloseInviteCandidate}
              width="100%"
              padding="14.5px 42px"
            >
              Close
            </InviteButton>
          </>
        )}
        {!inviting && !invited && (
          <form onSubmit={onSubmit}>
            <Row>
              <Para>
                An invitation will be sent and the candidate will be able to
                accept or reject the job application.
              </Para>
            </Row>
            <Row style={{ position: "relative" }}>
              <AutoComplete
                placeholder="Search candidates"
                onSearch={onSearch}
                options={options}
                loading={loading}
                onSelect={onSelect}
              />
              <SearchIcon />
            </Row>
            <Row>
              <Column>
                <CandidateHeading>Selected Candidates</CandidateHeading>
                <Separator margin="8px 0px 16px 0px" />
                <CandidatesContainer>
                  {selectedCandidates.map(
                    ({ id, value, avatar, location }: any) => (
                      <React.Fragment key={id}>
                        <Row
                          style={{
                            padding: "16px 20px",
                            justifyContent: "flex-start",
                          }}
                          gap="0px"
                        >
                          <DeleteIcon
                            onClick={() => removeCandidate(id)}
                            style={{ marginRight: "18px", cursor: "pointer" }}
                          />

                          <Avatar
                            src={`https://apis.resumaps.com/file/${avatar}/50/50`}
                            margin="0px 8px 0px 0px"
                          >
                            {String(value).toUpperCase().charAt(0)}
                          </Avatar>
                          <Column>
                            <CompanyHeading>{value}</CompanyHeading>
                            <Location>{location}</Location>
                          </Column>
                        </Row>
                        <Separator margin="0px" />
                      </React.Fragment>
                    )
                  )}
                </CandidatesContainer>
              </Column>
            </Row>
            <Row style={{ marginTop: "40px", justifyContent: "center" }}>
              <InviteButton
                loading={inviting}
                disabled={inviting}
                width="100%"
                padding="14.5px 42px"
              >
                Invite
              </InviteButton>
              <CancelButton
                onClick={handleCloseInviteCandidate}
                width="100%"
                padding="14.5px 42px"
              >
                Cancel
              </CancelButton>
            </Row>
          </form>
        )}
      </InviteCandidateModal>
      
      <Snackbar
        message={snackbarData.message}
        description={snackbarData.description}
        type={snackbarData.type}
        show={snackbarData.show}
        showIcon
        onClose={handleCloseSnackbar}
      />
    </>
  );
};

export default Container;
