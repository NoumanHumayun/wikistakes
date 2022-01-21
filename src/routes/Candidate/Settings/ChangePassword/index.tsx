import React from "react";
import { Row, Column, MainContainer } from "components/structural";
import Snackbar from "components/notification";
import { H2, Label, Para, Separator } from "components/typography";
import { Input } from "components/form";
import Button from "components/button/primary";
import { ViewCard } from "components/cards";
import { ThemeContext } from "styled-components";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { PASSWPORD_CHANGE } from "../mutations"

const ChangePassword = () => {
  const id = localStorage.getItem("id") || "";
  const { isDesktop } = React.useContext(ThemeContext);
  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });
  const [passwordChange, { loading, error }] = useMutation(PASSWPORD_CHANGE);

  React.useEffect(() => {
    if (!loading && error)
      setSnackbarData({
        message: "Error",
        description: error.message || "",
        type: "error",
        show: true,
      });
    
  }, [loading, error])

  const onSubmit = React.useCallback(
    async (event: React.FocusEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { elements }: any = event.currentTarget;
      try {
        const oldPassword: any = elements['oldPassword'].value;
        const newPassword: any = elements['newPassword'].value;
        await passwordChange({ variables: { oldPassword, newPassword } });
      }

      catch (error) {
        console.error(error);
        setSnackbarData({
          message: "Error",
          description: error.message || "",
          type: "error",
          show: true,
        });
      }
    },
    [passwordChange]
  );

  return (
    <ViewCard
      margin={isDesktop ? "64px auto" : "8px 0px 0px 0px"}
      style={isDesktop ? { maxWidth: "736px", width: "90%" } : {}}
    >
      <form onSubmit={onSubmit}  >
        <H2>Change Password</H2>
        <Separator margin="16px 0px 24px 0px" />
        <Snackbar
          message={snackbarData.message}
          description={snackbarData.description}
          type={snackbarData.type}
          show={snackbarData.show}
          showIcon
          onClose={() => { }}
        />
        <Row>
          <Column>
            <Label>New Password</Label>
            <Input type="password" placeholder="Enter new password" name="newPassword" />
          </Column>
        </Row>
        <Row style={{ marginTop: "32px", justifyContent: "flex-end" }}>
          <Column>
            <Label>Old Password</Label>
            <Input type="password" placeholder="Enter old password" name="oldPassword" />
          </Column>
        </Row>

        <Row style={{ marginTop: "32px", justifyContent: "flex-end" }}>
          <Button padding="14.5px 42px" loading={loading} disabled={loading}>Save</Button>
        </Row>
      </form>
    </ViewCard>

  );
};

export default ChangePassword;
