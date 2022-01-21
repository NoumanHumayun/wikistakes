import React from "react";
import { useCallback } from "react";
import { Row, Modal } from "components/structural";
import { H3, Separator } from "components/typography";
import Snackbar from "components/notification";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import {
  UploadButton,
  CancelButton,
  Para,
  SelectedFile,
  FileTag,
  CloseIcon,
  ResumeIcon,
  FileText,
  ToggleSwitch,
  SelectInput,
} from "../components/dialog.components";
import {
  JOB_CANDIDATES_UPDATE,
  RESUME_UPDATE,
  APPLICATION_DELETE,
} from "../mutations";
import { GET_RESUME_BY_CONTEXT } from "../queries";
import permissions from "mock/permissions.json";

const Container = ({
  id,
  title,
  autoDelete,
  applicationId,
  candidateId,
  permission,
  handleCloseModal,
}: any) => {
  const [file, setFile] = React.useState<any>();
  const [resume, setResume] = React.useState(undefined);
  const [resumePermission, setResumePermission] = React.useState<any>(
    undefined
  );

  const [jobCandidateUpdate] = useMutation(JOB_CANDIDATES_UPDATE);
  const [resumeUpdate] = useMutation(RESUME_UPDATE);
  const [applicationDelete, { loading: isApplicationDeleting }] = useMutation(
    APPLICATION_DELETE
  );

  const { data, loading } = useQuery<any>(GET_RESUME_BY_CONTEXT, {
    variables: { id, candidateId },
    fetchPolicy: "no-cache",
  });

  React.useEffect(() => setFile(title), [title]);
  React.useEffect(() => setResumePermission(permission), [permission]);
  React.useEffect(() => setResume(id), [id]);

  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

  const handleCloseSnackbar = React.useCallback(() => {
    setSnackbarData((prevState: any) => {
      return {
        ...prevState,
        show: false,
      };
    });
  }, []);

  const Resumes = React.useMemo(() => {
    if (!loading && data?.resumesByContext) {
      return (data.resumesByContext ?? []).map(
        ({ title: label, id: value }: any) => ({
          label,
          value,
        })
      );
    }
    return [];
  }, [data, loading]);

  const onRemove = useCallback(async () => {
    setFile(undefined);
  }, []);

  const onApplicationDelete = React.useCallback(
    async (event: any) => {
      event.preventDefault();
      await applicationDelete({ variables: { id: applicationId } });
      handleCloseModal();
    },
    [handleCloseModal, applicationDelete, applicationId]
  );

  const handleChange = useCallback(
    async (autoDelete) => {
      await jobCandidateUpdate({
        variables: { input: { id: applicationId, autoDelete } },
      });
    },
    [applicationId, jobCandidateUpdate]
  );

  const onResumePermission = React.useCallback(
    async (permission, label) => {
      setResumePermission(() => permission);
      await resumeUpdate({
        variables: { input: { id, candidateId, permission } },
      });
    },
    [resumeUpdate, id, candidateId]
  );

  const onResumes = React.useCallback(
    async (resumeId, { label }) => {
      setResume(resumeId);
      setFile(label);
      await jobCandidateUpdate({
        variables: { input: { id: applicationId, resumeId } },
      });
    },
    [jobCandidateUpdate, applicationId]
  );

  return (
    <>
      <Modal
        visible={true}
        footer={null}
        closable={false}
        maskClosable={false}
        onCancel={handleCloseModal}
        width="576px"
        wrapClassName="upload-modal"
      >
        <H3>Manage Application</H3>

        <Row style={{ position: "relative" }}>
          <Para margin="10px 0px 24px 0px">
            You can update your resume, change resume permissions or cancel your
            job application and remove your resume.
          </Para>
          {!!file ? (
            <SelectedFile>
              <FileTag>
                <ResumeIcon />
                <FileText>{file}</FileText>
              </FileTag>
              <CloseIcon onClick={onRemove} />
            </SelectedFile>
          ) : (
            <SelectInput
              onChange={onResumes}
              placeholder="Resumes"
              options={Resumes}
              value={resume}
              allowClear
            />
          )}
        </Row>

        <Row>
          <Para margin="24px 0px 0px 0px">RESUME PERMISSIONS</Para>
        </Row>
        <Separator />

        <SelectInput
          onChange={onResumePermission}
          placeholder="Resume is available as view only"
          options={permissions}
          value={resumePermission}
          allowClear
        />

        <Row style={{ position: "relative" }}>
          <Para mini>
            <input type="checkbox" style={{ margin: '6px 10px 0px 0px' }} defaultChecked={autoDelete} onChange={_e => handleChange(_e.currentTarget.checked)} />
            Automatically delete my resume upon unsuccessful application
          </Para>
          {/* <ToggleSwitch defaultChecked={autoDelete} onClick={handleChange} /> */}
        </Row>

        <Row style={{ marginTop: "30px", justifyContent: "center" }}>
          <UploadButton
            width="100%"
            padding="14.5px 42px"
            onClick={onApplicationDelete}
            loading={isApplicationDeleting}
            disabled={isApplicationDeleting}
          >
            Cancel Application
          </UploadButton>
          <CancelButton
            onClick={handleCloseModal}
            width="100%"
            padding="14.5px 42px"
          >
            Cancel
          </CancelButton>
        </Row>
      </Modal>
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
