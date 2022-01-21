import React from "react";
import { useHistory } from "react-router-dom";
import { Row } from "components/structural";
import { H2, Separator } from "components/typography";
import Snackbar from "components/notification";
import {
  UploadResumeModal,
  UploadButton,
  CancelButton,
  Para,
  LinkText,
} from "../components/styled.components";
import { ReactComponent as UploadIcon } from "assets/svg/upload.svg";
import { Upload } from "antd";

interface InviteCandidateProps {
  visible: boolean;
  handleCloseModal: () => void;
}

const { Dragger } = Upload;
const Container = (props: InviteCandidateProps) => {
  const { visible, handleCloseModal } = props;
  const { push } = useHistory();
  const [file, setFile] = React.useState<any>();
  const [isUploaded, setUploaded] = React.useState(false);
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
  const selectFile = (file: any) => {
    // add validations
    setFile(file);
    return false;
  };

  const handleUpload = (event: any) => {
    event.preventDefault();
    handleCloseModal();
    if (file) setUploaded(true);
  };
  const handleCancel = (event: any) => {
    event.preventDefault();
    handleCloseModal();
  };

  return (
    <>
      <UploadResumeModal
        visible={visible}
        footer={null}
        closable={false}
        maskClosable={true}
        onCancel={handleCloseModal}
        wrapClassName="upload-modal"
      >
        <form>
          <H2>Upload Your Resume</H2>
          <Separator />
          <Row style={{ position: "relative" }}>
            <Para >
              By uploading your resume, we can match you to new potential
              job opportunities. Reset assured, ResuMap gives you complete
              control over your personal data so remove when you feel like.
              </Para>
          </Row>
          <Dragger
            name="file"
            onRemove={onRemove}
            beforeUpload={selectFile}
          >
            <p className="ant-upload-drag-icon">
              <UploadIcon style={{ marginRight: "8px" }} /> Upload Resume
                    </p>
            <p className="ant-upload-text">
              (*.doc, *.docx, *.rtf, *.txt, *.pdf) Max. 5 MB
                    </p>
          </Dragger>
          <Row style={{ position: "relative" }}>
            <Para>
              OR
                    <LinkText>
                <a href="">Copy and paste resume</a>
              </LinkText>
            </Para>
          </Row>
          <Row style={{ marginTop: "30px", justifyContent: "center" }}>
            <UploadButton
              width="100%"
              padding="14.5px 42px"
              onClick={handleUpload}
            >
              Upload
            </UploadButton>
            <CancelButton
              onClick={handleCancel}
              width="100%"
              padding="14.5px 42px"
            >
              Cancel
            </CancelButton>
          </Row>
        </form>
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
