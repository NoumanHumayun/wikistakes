import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { CANDIDATE_ACCOUNT_DELETE } from "../../mutations";

import Snackbar from "components/notification";

import { Row } from "components/structural";
import { H2 } from "components/typography";

import {
  InviteCandidateModal,
  UploadButton,
  CancelButton,
  Para,
} from "../components/styled.components";

interface InviteCandidateProps {
  visible: boolean;
  handleCloseModal: () => void;
}

const Container = (props: InviteCandidateProps) => {
  const { visible, handleCloseModal } = props;
  const History = useHistory();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [open, isOpen] = React.useState(visible);
  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });
  const [candidatesAccountDelete] = useMutation(CANDIDATE_ACCOUNT_DELETE);
  const id = localStorage.getItem("id") || "";

  const handleCloseSnackbar = React.useCallback(() => {
    setSnackbarData((prevState: any) => {
      return {
        ...prevState,
        show: false,
      };
    });
  }, []);

  React.useEffect(() => {
    isOpen(visible);
  }, [visible]);

  const onDeleteAccount = React.useCallback(
    async (event: React.MouseEvent<any>) => {
      await candidatesAccountDelete({ variables: { id } });
      handleCloseModal();
      if (id) {
        localStorage.clear();
        History.push("/signup");
      }
    },
    [candidatesAccountDelete]
  );

  const showModal = () => {
    isOpen(false);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    handleCloseModal();
  };

  const CancelData = () => {
    setIsModalVisible(false);
  };
  const Cancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <InviteCandidateModal
        visible={open}
        footer={null}
        closable={true}
        width="448px"
        top="259px"
      >
        <Row>
          <H2>Are you sure?</H2>
          <Para>
            Sorry to hear you go! Please make sure you understand that by
            closing your account, all your account and application data will be
            wiped This is not reversible
          </Para>
        </Row>
        <UploadButton width="100%" onClick={showModal}>
          Yes I am sure
        </UploadButton>
        <CancelButton width="100%" padding="14.5px 42px" onClick={handleCancel}>
          Cancel
        </CancelButton>
      </InviteCandidateModal>

      <InviteCandidateModal
        footer={null}
        closable={false}
        width="448px"
        top="259px"
        visible={isModalVisible}
        onCancel={Cancel}
      >
        <Row>
          <H2>Are you sure?</H2>
          <Para>
            All your uploaded resumes and active job applications will be
            automatically cleared from our platform and canot be reversed.
          </Para>
        </Row>
        <UploadButton width="100%" onClick={onDeleteAccount}>
          Yes I am sure
        </UploadButton>
        <CancelButton width="100%" padding="14.5px 42px" onClick={CancelData}>
          Cancel
        </CancelButton>
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
