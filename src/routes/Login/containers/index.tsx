import { useState, useCallback, useContext } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "context/GlobalContext";
import client from "configs/apollo";
import Snackbar from "components/notification";
import Button from "components/button/primary";
import { Input } from "components/form";
import { setDataToLocalStorage } from "helpers/general";
import { Modal, Row, Column } from "components/structural";
import { H2, Separator, Label, Para, Link } from "components/typography";

import { LOGIN } from "../query";
import { CONTEXT } from "helpers/constants";

const Container = () => {
  const { push } = useHistory();
  const { dispatch } = useContext(GlobalContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [snackbarData, setSnackbarData] = useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

  const onSubmit = useCallback(
    async (event: React.FocusEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleCloseSnackbar();
      setLoading(true);

      try {
        const input: any = {};
        const { elements } = event.currentTarget;
        for (let i = 0; i < elements.length; i++) {
          const { name, value } = elements.item(i) as any;
          if (name && value) input[name] = value;
        }
        const { data } = await client.query({
          query: LOGIN,
          variables: { ...input },
        });
        setLoading(false);
        const { roles, token, recruiter, candidate } = data?.login;
        const {
          data: { id },
        }: any = jwt_decode(token);

        const { firstName } = recruiter || candidate;
        setDataToLocalStorage("id", id || "");
        setDataToLocalStorage("token", token || "");
        setDataToLocalStorage("firstName", firstName);
        const _roles: string[] = (roles ?? []).map(({ name }: any) => name);
        localStorage.setItem("roles", JSON.stringify(_roles));

        dispatch({
          type: CONTEXT.SET_ROLES,
          data: _roles,
        });

        push("/");
        window.location.reload();
      } catch (error) {
        console.error(error);
        setLoading(false);
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

  const handleCloseSnackbar = useCallback(() => {
    setSnackbarData((prevState: any) => {
      return {
        ...prevState,
        show: false,
      };
    });
  }, []);

  return (
    <>
      <Modal visible={true} footer={null} closable={false} width="432px">
        <form onSubmit={onSubmit}>
          <H2>Log In</H2>
          <Separator />
          <Row>
            <Column>
              <Label>Email Address</Label>
              <Input name="email" placeholder="Enter email address" required />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Password</Label>
              <Input
                name="password"
                placeholder="Enter email address"
                type="password"
                required
              />
            </Column>
          </Row>
          <Row>
            <Para textAlign="right" margin="12px 0px 48px 0px" width="100%">
              <Link to="/#"> Forgot Password? </Link>
            </Para>
          </Row>
          <Button width="100%" loading={isLoading}>
            Log In
          </Button>
          <Para textAlign="center">
            Don't have an account? &nbsp; <Link to="/signup"> Sign Up </Link>
          </Para>
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
