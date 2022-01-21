import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { Modal, Row, Column } from "components/structural";
import { Input, Checkbox, PrefixInput } from "components/form";
import { H2, Separator, Label, Para, Link } from "components/typography";

import Snackbar from "components/notification";
import Button from "components/button/primary";

import { CREATE_RECRUITER, CREATE_CANDIDATE } from "../mutations";
import { ConfirmSignupModal } from "../components/styled.components";

import { ReactComponent as JapanIcon } from "assets/svg/japan.svg";

const Container = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const checkbox = React.useRef<any>();
  const [createRecruiter] = useMutation(
    pathname === "/signup" ? CREATE_CANDIDATE : CREATE_RECRUITER,
    {
      fetchPolicy: "no-cache",
    }
  );

  const [isConfirmationDialogOpen, setConfirmationDialog] = React.useState(
    false
  );

  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

  React.useEffect(() => {
    checkbox.current?.input?.setAttribute("required", true);
  }, [checkbox]);

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

        localStorage.setItem("firstName", input?.firstName || "");
        await createRecruiter({ variables: { input } });

        setConfirmationDialog(true);
      } catch (error: any) {
        console.error(error);
        setSnackbarData({
          message: "Error",
          description: error.message || "",
          type: "error",
          show: true,
        });
      }
    },
    [createRecruiter]
  );

  const handleOkay = React.useCallback(() => {
    setConfirmationDialog(false);
    push("/signin");
  }, [push]);

  const handleCloseSnackbar = React.useCallback(() => {
    setSnackbarData((prevState: any) => {
      return {
        ...prevState,
        show: false,
      };
    });
  }, []);

  return (
    <>
      <Modal visible={true} footer={null} closable={false}>
        <form onSubmit={onSubmit}>
          <H2>Sign Up</H2>
          <Separator />
          <Row>
            <Column xs={11} md={12}>
              <Label>First Name</Label>
              <Input placeholder="Enter first name" name="firstName" />
            </Column>
            <Column xs={11} md={12}>
              <Label>Last Name</Label>
              <Input placeholder="Enter last name" name="lastName" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Email Address</Label>
              <Input
                placeholder="Enter email address"
                type="email"
                name="email"
                required
              />
            </Column>
          </Row>
          <Row alignItems="flex-end">
            <Column width="100px">
              <Label>Phone Number</Label>
              <PrefixInput
                prefix={<JapanIcon />}
                value="+81"
                name="phoneCode"
                style={{ textAlign: "right", paddingRight: "13px" }}
              />
            </Column>
            <Column>
              <Input placeholder="Enter phone number" name="phone" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Location</Label>
              <Input placeholder="Location" name="location" />
            </Column>
          </Row>
          <Row flexFlow="row nowrap">
            <Column flex="none">
              <Checkbox ref={checkbox} />
            </Column>
            <Column flex="auto">
              <Para>
                By clicking Next, you are indicating that you have read and
                acknowledge the Terms of Service and Privacy Notice.
              </Para>
            </Column>
          </Row>
          <Button width="100%">Sign Up</Button>
          <Para textAlign="center">
            Already have an account? &nbsp; <Link to="/signin"> Log In </Link>
          </Para>
        </form>
      </Modal>
      <ConfirmSignupModal
        visible={isConfirmationDialogOpen}
        footer={null}
        closable={false}
      >
        <H2>Confirm Email Address</H2>
        <Para>
          To complete the sign up process, please check your email and click the
          validation link to confirm your email address.
        </Para>
        <Button width="100%" onClick={handleOkay}>
          OK
        </Button>
      </ConfirmSignupModal>
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
