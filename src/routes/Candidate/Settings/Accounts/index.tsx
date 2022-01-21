import React from "react";
import dayjs from "dayjs";
import {
  Container,
  Row,
  Column,
  AccountBlock,
  UploadYourResume,
  Modal,
} from "components/structural";

import {
  H2,
  Label,
  Separator,
  CustomLabel,
  ResumeText,
  ResumeUpload,
  Para,
} from "components/typography";

import { ReactComponent as GearIcon } from "assets/svg/settings.svg";
import { ThemeContext } from "styled-components";
import { DeleteButton } from "components/button/primary";
import { ViewCard } from "components/cards";
import ManageResume from "../../ViewApplication/containers/ManageApplication";
import UploadResume from "components/UploadResume";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import {
  CANDIDATE_DELETE,
  DELETE_DATA,
  CANDIDATE_ACCOUNT_DELETE,
} from "../mutations";
import { ReactComponent as AddResumeIcon } from "assets/svg/uploadResume.svg";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { FETCH_CANDIDATE_DATA } from "../queries";
import GenericLoader from "components/GenericLoader";
import {
  CancelButton,
  UploadButton,
} from "../DeleteAccount/components/styled.components";

const Accounts = () => {
  const [shoudlDeleteData, setDeleteData] = React.useState(false);
  const [shouldDeleteAccount, setDeleteAccount] = React.useState(false);
  const [shouldUploadResume, setUploadResume] = React.useState(false);
  const [resume, setResume] = React.useState(undefined);
  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

  const [candidatesDelete] = useMutation(CANDIDATE_DELETE);

  const [deleteAccount, { loading: isDeletingAccount }] = useMutation(
    CANDIDATE_ACCOUNT_DELETE
  );
  const [deleteData, { loading: isDeleting }] = useMutation(DELETE_DATA);

  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isManageResumeOpen, setManageResume] = React.useState<boolean>(false);
  const candidateId = localStorage.getItem("id") || "";
  const { data, loading, refetch } = useQuery<any>(FETCH_CANDIDATE_DATA, {
    variables: { id: candidateId },
    fetchPolicy: "no-cache",
  });

  const _data = React.useMemo(() => {
    if (!loading && data?.candidate) {
      const { resume, applications } = data.candidate;

      const _resumes = (resume ?? []).map(({ createdOn }: any) => ({
        createdOn,
        appliedOn: `Uploaded On ${dayjs
          .unix(createdOn / 1000)
          // @ts-ignore
          .utc()
          .local()
          .format("DD/MM/YY")}`,
        jobTitle: "Resume Uploaded",
      }));

      const _applications = (applications ?? []).map(
        ({
          createdOn,
          job: { jobTitle },
          resume,
          autoDelete,
          applicationId,
          candidateId,
        }: any) => ({
          resume: { ...resume, autoDelete, applicationId, candidateId },
          createdOn,
          appliedOn: `Applied On ${dayjs
            .unix(createdOn / 1000)
            // @ts-ignore
            .utc()
            .local()
            .format("DD/MM/YY")}`,
          jobTitle,
        })
      );

      return [..._resumes, ..._applications].sort(
        (_a, _b) => _b.createdOn - _a.createdOn
      );
    }
    return [];
  }, [data, loading]);

  const { isDesktop } = React.useContext(ThemeContext);
  const onSubmit = React.useCallback(
    async (event: React.FocusEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const input: any = {};
        const { elements } = event.currentTarget;
        for (let i = 0; i < elements.length; i++) {
          const { name, value } = elements.item(i) as any;
          if (name && value) input[name] = value;
        }
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
    []
  );

  if (loading)
    return (
      <Container>
        <GenericLoader invert />
      </Container>
    );

  return (
    <ViewCard
      margin={isDesktop ? "64px auto" : "8px 0px 0px 0px"}
      style={isDesktop ? { maxWidth: "736px", width: "90%" } : {}}
    >
      <form onSubmit={onSubmit}>
        <H2>Accounts</H2>
        <Separator margin="16px 0px 24px 0px" />

        <Row>
          <CustomLabel fullWidth>
            You have total control of your data on ResuMap. Control how you
            would like your resume to be handled. Below is all the data you have
            provided.
          </CustomLabel>
        </Row>
        <Row style={{ marginTop: "34.5px" }}>
          <Label>MY DATA</Label>
        </Row>
        <Separator margin="0px 0px 24px 0px" />
        {_data.length ? (
          _data.map(({ jobTitle, appliedOn, resume: _resume }) => {
            return (
              <AccountBlock
                onClick={() => (!!_resume ? setResume(_resume) : void 0)}
                style={
                  !!_resume
                    ? { marginTop: "32px", cursor: "pointer" }
                    : { marginTop: "32px" }
                }
              >
                <Column>
                  <CustomLabel
                    color="#010102"
                    style={!!_resume ? { cursor: "pointer" } : {}}
                  >
                    <strong>{jobTitle}</strong>
                  </CustomLabel>
                  <CustomLabel style={{ marginTop: "8px" }}>
                    {appliedOn}
                  </CustomLabel>
                </Column>
                <Column style={{ alignItems: "flex-end", flex: 0 }}>
                  {!!_resume ? <GearIcon /> : <></>}
                </Column>
              </AccountBlock>
            );
          })
        ) : (
          <Row
            onClick={() => setUploadResume(true)}
            style={{ cursor: "pointer" }}
          >
            <UploadYourResume>
              <Column>
                <AddResumeIcon
                  style={isDesktop ? { margin: "0px 10px" } : {}}
                />
              </Column>
              <Column>
                <ResumeUpload margin="18px 8px 3px 72px">
                  {" "}
                  Upload Your Resume
                </ResumeUpload>

                {isDesktop ? (
                  <ResumeText margin="8px 0px 18px 72px">
                    We will match you with new job opportunities
                  </ResumeText>
                ) : (
                  ""
                )}
              </Column>
            </UploadYourResume>
          </Row>
        )}

        <Row
          style={{ marginTop: "42px", justifyContent: "flex-end" }}
          gap="5px"
        >
          <DeleteButton
            padding="8px 16px"
            color="#fff"
            bg="#EA3D2F"
            onClick={() => setDeleteAccount(true)}
          >
            Delete Account
          </DeleteButton>
          <DeleteButton
            padding="8px 16px"
            bg="#fff"
            border="0.5px solid rgba(10, 5, 41, 0.32)"
            onClick={() => setDeleteData(true)}
          >
            Clear All Data
          </DeleteButton>
        </Row>
      </form>

      {shoudlDeleteData && (
        <Modal
          footer={null}
          closable={false}
          width="448px"
          visible={true}
          onCancel={() => setDeleteData(false)}
        >
          <Row>
            <H2>Are you sure?</H2>
            <Para>
              All your uploaded resumes and active job applications will be
              automatically cleared from our platform and canot be reversed.
            </Para>
          </Row>
          <UploadButton
            loading={isDeleting}
            disabled={isDeleting}
            width="100%"
            onClick={async () => {
              await deleteData();
              await refetch();
              setDeleteData(false);
            }}
          >
            Yes I am sure
          </UploadButton>
          <CancelButton
            width="100%"
            padding="14.5px 42px"
            onClick={() => setDeleteData(false)}
          >
            Cancel
          </CancelButton>
        </Modal>
      )}

      {shouldDeleteAccount && (
        <Modal visible={true} footer={null} closable={true} width="448px">
          <Row>
            <H2>Are you sure?</H2>
            <Para>
              Sorry to hear you go! Please make sure you understand that by
              closing your account, all your account and application data will
              be wiped This is not reversible
            </Para>
          </Row>
          <UploadButton
            loading={isDeletingAccount}
            disabled={isDeletingAccount}
            width="100%"
            onClick={async () => {
              await deleteAccount({
                variables: { id: localStorage.getItem("id") || "" },
              });
              localStorage.clear();
              window.location.reload();
            }}
          >
            Yes I am sure
          </UploadButton>
          <CancelButton
            width="100%"
            padding="14.5px 42px"
            onClick={() => setDeleteAccount(false)}
          >
            Cancel
          </CancelButton>
        </Modal>
      )}
      {!!resume && (
        <ManageResume
          {...resume}
          handleCloseModal={async () => {
            setResume(undefined);
            refetch();
          }}
        />
      )}
      {shouldUploadResume && (
        <UploadResume
          visible={true}
          handleCloseModal={async () => {
            await refetch();
            setUploadResume(false);
          }}
        />
      )}
    </ViewCard>
  );
};

export default Accounts;
