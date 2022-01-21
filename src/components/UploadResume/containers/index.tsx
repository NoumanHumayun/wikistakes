import React from "react";
import permissions from "mock/permissions.json";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { Column, Row } from "components/structural";
import { H2, ProfileHeading, Separator } from "components/typography";
import Snackbar from "components/notification";
import {
  UploadResumeModal,
  UploadButton,
  CancelButton,
  Para,
  LinkText,
  SelectedFile,
  FileTag,
  CloseIcon,
  ResumeIcon,
  FileText
} from "../components/styled.components";
import { SelectInput } from "components/SelectInput";
import { ReactComponent as DropDownArrow } from "assets/svg/arrow_down.svg";
import { RESUME_CREATE, APPLICATION_CREATE } from "../mutations";
import { UPLOAD_FILE } from "helpers/upload";
import Upload from '../components/upload';
import Copy from './copy';
import { useCallback } from "react";
import { Input } from "components/form";
interface InviteCandidateProps {
  visible: boolean;
  handleCloseModal: () => void;
}

const Container = (props: InviteCandidateProps) => {
  const quill = React.useRef<any>();
  const { push } = useHistory();
  const [isCopyPaste, setCopyPaste] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [resumeCreate] = useMutation(RESUME_CREATE);
  const [applicationCreate] = useMutation(APPLICATION_CREATE);
  const { id: jobId } = useParams<any>();
  const isLoggedIn = !!localStorage.getItem("token");
  const { visible, handleCloseModal } = props;
  const [file, setFile] = React.useState<any>();
  const [isAutoDelete, setAutoDelete] = React.useState(false);
  const [permission, setPermission] = React.useState("VIEW");
  const [isUploaded, setUploaded] = React.useState(false);
  const [isUploading, setUploading] = React.useState(false);
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

  const onRemove = () => {
    setFile(undefined);
  };

  const selectFile = useCallback((file: any) => {
    setFile(file);
    setCopyPaste(false);
    return false;
  }, []);

  const onPaste = useCallback(() => setCopyPaste(true), []);

  const handleUpload = React.useCallback(
    async (event: any) => {
      event.preventDefault();
      if (!isLoggedIn) push("/signup");
      const candidateId = localStorage.getItem("id") || "";
      setUploading(true);

      const input: any = {
        permission,
        candidateId,
        title
      };
      if(!isCopyPaste) 
        input.resume = await UPLOAD_FILE(file);
      else {
        if(quill.current)
          input.resumeText= quill.current.getEditorContents();
      }

      const {
        data: {
          resumeCreate: { id: resumeId },
        },
      } = await resumeCreate({ variables: { input } });
      if (jobId)
        await applicationCreate({
          variables: {
            input: { resumeId, candidateId, jobId, autoDelete: isAutoDelete },
          },
        });
      setUploaded(true);
      setUploading(false);
    },
    [
      push,
      file,
      isLoggedIn,
      permission,
      jobId,
      isAutoDelete,
      resumeCreate,
      applicationCreate,
      isCopyPaste,
      title
    ]
  );

  const handleCancel = (event: any) => {
    event.preventDefault();
    if (!isLoggedIn) push("/signin");
    handleCloseModal();
  };

  return (
    <>
      {!isUploaded && (
        <UploadResumeModal
          visible={visible}
          footer={null}
          closable={false}
          maskClosable={true}
          onCancel={handleCloseModal}
          width={isLoggedIn ? "576px" : "448px"}
          top={isLoggedIn ? "13%" : "24%"}
          align={isLoggedIn ? "start" : "center"}
          wrapClassName="upload-modal"
        >
          <form onSubmit={handleUpload}>
            <H2>Upload Your Resume</H2>
            <Separator />
            {!isLoggedIn ? (
              <Row>
                <Para margin="10px 0px 24px 0px">
                  We will match you with new job opportunities that match your
                  skills and qualifications. Sign up to upload your resume and a
                  representative will contact you within 1-2 working days to
                  recommend you new jobs
                </Para>
              </Row>
            ) : (
              <>
                <Row className="dragger">
                  <Para margin="10px 0px 24px 0px">
                    To ensure your skills meet the job requirements, we will need to screen your resume. Upon successful screening, a representative will contact you to prepare you for the interview.
                  </Para>
                  {file ? (
                    <SelectedFile>
                      <FileTag>
                        <ResumeIcon />
                        <FileText>{file?.name}</FileText>
                      </FileTag>
                      <CloseIcon onClick={onRemove} />
                    </SelectedFile>
                  ) : (
                    <Upload onRemove={onRemove} selectFile={selectFile} />
                  )}
                </Row>
                <Column margin="10px 0px 0px 0px">
                  <ProfileHeading style={{ marginTop: "5px" }}>Resume Title</ProfileHeading>
                  <Input placeholder="Resume title" onBlur={e=>setTitle(e.currentTarget.value)} required />
                </Column>
                {isCopyPaste && <>
                  <ProfileHeading style={{ marginTop: "20px" }}>Copy and Paste Resume</ProfileHeading>
                  <Copy forwardRef={quill} />
                </>
                }
                {file || isCopyPaste ? (
                  <>
                    <Row>
                      <Para margin="24px 0px 0px 0px">RESUME PERMISSIONS</Para>
                    </Row>
                    <Separator />
                    <Row>
                      <SelectInput
                        onChange={(_permi: any) => setPermission(_permi)}
                        placeholder="Download"
                        suffixIcon={<DropDownArrow />}
                        options={permissions}
                        value={permission}
                        style={{
                          flex: 1,
                          marginLeft: "0px",
                          marginTop: "10px",
                          minHeight: "56px",
                          background: "#f1f0f7",
                        }}
                      />
                    </Row>
                    <Row style={{ position: "relative" }}>
                      <Para mini>
                        <input type="checkbox" style={{ margin: '6px 10px 0px 0px' }} checked={isAutoDelete} onChange={_e => setAutoDelete(_e.currentTarget.checked)} />
                        Automatically delete my resume upon unsuccessful
                        application
                      </Para>
                    </Row>
                  </>
                ) : (
                  <Row style={{ position: "relative" }}>
                    <Para>
                      OR
                      <LinkText>
                        <span onClick={onPaste}>Copy and paste resume</span>
                      </LinkText>
                    </Para>
                  </Row>
                )}
              </>
            )}
            <Row style={{ marginTop: "30px", justifyContent: "center" }}>
              <UploadButton
                type="submit"
                width="100%"
                padding="14.5px 42px"
                loading={isUploading}
                disabled={isUploading || (!file && !isCopyPaste)}
              >
                {isLoggedIn ? "Upload" : "Sign Up"}
              </UploadButton>
              <CancelButton
                type="button"
                onClick={handleCancel}
                width="100%"
                padding="14.5px 42px"
                disabled={isUploading}
              >
                {isLoggedIn ? "Cancel" : "Log in"}
              </CancelButton>
            </Row>
          </form>
        </UploadResumeModal>
      )}
      <UploadResumeModal visible={isUploaded} footer={null} closable={false}>
        <H2>Thank you {localStorage.getItem("firstName") || ""}!</H2>
        <Para>
          We will contact you soon with new job opportunities that match your
          experience. In the meantime, feel free to look at more jobs that may
          interest you.
        </Para>
        <UploadButton width="100%" onClick={() => handleCloseModal()}>
          OK
        </UploadButton>
      </UploadResumeModal>
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
