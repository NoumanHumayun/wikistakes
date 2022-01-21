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
  RESUME_UPDATE, RESUME_AUTO_DELETE, RESUME_UPLOAD, RESUME_DELETE, APPLICATION_DELETE
} from "../../mutations";
import { FETCH_CANDIDATE_PROFILE } from "../../queries";

const Container = ({
  handleCloseModal,
  visible
}: any) => {
  const [file, setFile] = React.useState<any>();
  const [state, setState] = React.useState<any>({ checked: false });
  const candidateId = localStorage.getItem("id") || "";
  const [resumeUpdate] = useMutation(RESUME_UPDATE);
  const [resumeDelete] = useMutation(RESUME_DELETE)
  const [resumeAutoDelete] = useMutation(RESUME_AUTO_DELETE)
  const [jobCandidateDelete] = useMutation(APPLICATION_DELETE)
  const [resumeCreate] = useMutation(RESUME_UPLOAD);
  const { data, loading, refetch } = useQuery<any>(FETCH_CANDIDATE_PROFILE, {
    variables: { id: candidateId },
    fetchPolicy: "no-cache",
  });
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

  const onResumePermission = React.useCallback(
    async (val: any) => {
      await resumeUpdate({
        variables: { input: { id: data.candidate.resume[0].id, candidateId, permission: val } },
      });
      refetch();
    },
    [resumeUpdate, refetch, candidateId]
  );

  const CancelData = () => {
    handleCloseModal()
  };


  const ResumePermission = React.useMemo(
    () => [
      { label: "View", value: "VIEW" },
      { label: "Download", value: "DOWNLOAD" },
    ],
    []
  );

  const onResumeDelete = React.useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.currentTarget;
      if (checked) {
        await resumeAutoDelete({
          variables: {
            jobId: data.candidate.applications[0].job.id,
            resumeId: data.candidate.resume[0].id,
            candidateId: data.candidate.id
          },
        });
      }
      refetch();
    },
    [refetch, setState, data]
  );
  const onResumeCreate = useCallback(async () => {
    const input: any = {}
    await resumeCreate({ variables: { input: { candidateId } } });
    refetch();
  }, [refetch, resumeCreate, candidateId]);

  const {
    resume, applications
  } = data?.candidate ?? {};
  const { id, title, permission } = (resume ?? [])[0] ??
  {
    id: "",
    title: "", permission: ""
  };

  const { job: { id: jobId } } = (applications ?? [])[0] ?? { job: { id: "" } }

  const onDeleteResume = React.useCallback(
    async (event: React.MouseEvent<any>) => {
      const { id } = event.currentTarget;
      await resumeDelete({ variables: { id } });

    },
    [resumeDelete]
  );

  const onCancelApplication = React.useCallback(
    async (event: React.MouseEvent<any>) => {
      const { id } = event.currentTarget;
      if (applications.length == 0) {
        console.error("Applications list is empty")
        return
      }
      await jobCandidateDelete({ variables: { id: applications[0].id } });

    },
    [jobCandidateDelete, applications]
  );
  return (
    <>
      <Modal
        visible={visible}
        footer={null}
        closable={false}
        maskClosable={false}
        onCancel={handleCloseModal}
        width="576px"
        top="180px"
        wrapClassName="upload-modal"
      >
        <H3>Manage Resume</H3>

        <Row style={{ position: "relative" }}>
          <Para margin="10px 0px 24px 0px">
            You can update your resume, change resume permissions or cancel your
            job application and remove your resume.
          </Para>
          {/* {!!file ? ( */}
          <SelectedFile>
            <FileTag>
              <ResumeIcon />
              <FileText onClick={onResumeCreate}>
                {/* {file} */}
                Add Resume
                {title}
              </FileText>
            </FileTag>
            <CloseIcon id={id}
              onClick={onDeleteResume} />
          </SelectedFile>
          {/* ) : ( */}
          {/* <SelectInput
              placeholder="Resumes"
              options={Resumes}
              value={resume}
              allowClear
            /> */}
          {/* )} */}
        </Row>

        <Row>
          <Para margin="24px 0px 0px 0px">RESUME PERMISSIONS</Para>
        </Row>
        <Separator />

        <SelectInput
          onChange={onResumePermission}
          placeholder="Resume is available as view only"
          options={ResumePermission}
          value={permission}
          allowClear
        />

        <Row style={{ position: "relative" }}>
          <Para mini>
            <input type="checkbox" style={{ margin: '6px 10px 0px 0px' }} onChange={onResumeDelete} />
            Automatically delete my resume upon unsuccessful application
          </Para>
          {/* <ToggleSwitch onChange={onResumeDelete} /> */}
        </Row>

        <Row style={{ marginTop: "30px", justifyContent: "center" }}>
          <UploadButton
            width="100%"
            padding="14.5px 42px"
            onClick={onCancelApplication}
          >
            Cancel Application
          </UploadButton>
          <CancelButton
            width="100%"
            padding="14.5px 42px"
            onClick={CancelData}

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
