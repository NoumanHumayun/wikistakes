import React from "react";
import jwt from "jwt-decode";
import { useParams, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { Modal, Row, Column } from "components/structural";
import { H2, Separator, Label } from "components/typography";
import { Input } from "components/form";
import Button from "components/button/primary";
import Snackbar from "components/notification";
import { Para } from "../components/styled.components";
import { PASSWORD_CREATE_TOKEN_VERIFICATION } from "../queries";
import { PASSWPORD_CREATE } from "../mutations";
import GenericLoader from "components/GenericLoader";

const Container = () => {
  const { token } = useParams<any>();
  const { push } = useHistory();

  const {
    data: { id },
  } = jwt<any>(token);

  const { data: verification, loading: verifying } = useQuery(
    PASSWORD_CREATE_TOKEN_VERIFICATION,
    {
      fetchPolicy: "no-cache",
      variables: { token },
    }
  );

  const [passwordCreate, { loading: isCreatingPassword }] = useMutation(
    PASSWPORD_CREATE
  );

  const isVerified = React.useMemo(() => {
    return verification?.verifyToken;
  }, [verification]);

  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

  const onSubmit = React.useCallback(
    async (event: React.FocusEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { elements } = event.currentTarget;
      const { value: password } = elements.namedItem(
        "password1"
      ) as HTMLInputElement;
      const { value: confirmPassword } = elements.namedItem(
        "confirmPassword"
      ) as HTMLInputElement;
      if (password !== confirmPassword) {
        setSnackbarData({
          message: "Passwords mismatch",
          description: "",
          type: "error",
          show: true,
        });
      } else {
        await passwordCreate({ variables: { id, password } });
        push("/signin");
      }
    },
    [id, passwordCreate, push]
  );

  const handleCloseSnackbar = React.useCallback(() => {
    setSnackbarData((prevState: any) => {
      return {
        ...prevState,
        show: false,
      };
    });
  }, []);

  if (verifying || isCreatingPassword) return <GenericLoader invert />;

  if (!verifying && !isVerified) {
    return (
      <Modal visible={true} footer={null} closable={false} width="432px">
        <H2>Create Password</H2>
          <Separator />
          <Row>
            <Para>
              Your link is expired. Please contact admin here <a href="mailto: admin@resumaps.com">admin@resumaps.com</a>
            </Para>
          </Row>
      </Modal>
    );
  }

  return (
    <>
      <Modal visible={true} footer={null} closable={false} width="432px">
        <form onSubmit={onSubmit} autoComplete="false">
          <H2>Create Password</H2>
          <Separator />
          <Row>
            <Para>
              Thank you for confirming your email address. To complete the sign
              up process, please enter a password.
            </Para>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Column>
              <Label>Create Password</Label>
              <Input
                placeholder="Enter password"
                autoComplete="false"
                type="password"
                name="password1"
                minLength={8}
                required
              />
            </Column>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Column>
              <Label>Confirm Password</Label>
              <Input
                placeholder="Enter password"
                name="confirmPassword"
                autoComplete="false"
                type="password"
                minLength={8}
                required
              />
            </Column>
          </Row>
          <Button width="100%" style={{ marginTop: "48px" }}>
            Confirm Password
          </Button>
        </form>
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
