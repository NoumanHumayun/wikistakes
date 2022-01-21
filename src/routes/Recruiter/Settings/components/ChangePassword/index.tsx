import React from "react";
import { Row, Column, MainContainer } from "components/structural";
import { H2, Label, Separator } from "components/typography";
import { Input } from "components/form";
import Button from "components/button/primary";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { PASSWPORD_CHANGE } from "../../mutations"

const ChangePassword = () => {
  const id = localStorage.getItem("id") || "";

  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });
  const [passwordChange] = useMutation(PASSWPORD_CHANGE);

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
    []
  );

  return (
    <MainContainer>
      <form onSubmit={onSubmit}>
        <H2>Change Password</H2>
        <Separator margin="16px 0px 24px 0px" />

        <Row>
          <Column>
            <Label>New Password</Label>
            <Input placeholder="Enter new password" name="newPassword" />
          </Column>
        </Row>
        <Row style={{ marginTop: "32px", justifyContent: "flex-end" }}>
          <Column>
            <Label>Old Password</Label>
            <Input placeholder="Enter old password" name="oldPassword" />
          </Column>
        </Row>

        <Row style={{ marginTop: "32px", justifyContent: "flex-end" }}>
          <Button padding="14.5px 42px">Save</Button>
        </Row>
      </form>
    </MainContainer>

  );
};

export default ChangePassword;