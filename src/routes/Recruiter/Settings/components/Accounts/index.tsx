import React from "react";
import { Row, Column } from "components/structural";
import { H2, Label, Separator } from "components/typography";
import { ReactComponent as GearIcon } from "assets/svg/settings.svg";
import Snackbar from "components/notification";

import {
  CustomLabel,
  AccountBlock,
  DeleteButton,
} from "../styled.component";

const Accounts = () => {
  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

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
      } catch (error) {
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
    <form onSubmit={onSubmit}>
      <H2>Accounts</H2>
      <Separator margin="16px 0px 24px 0px" />

      <Row>
        <CustomLabel fullWidth>
          You have total control of your data on ResuMap. Control how you would
          like your resume to be handled. Below is all the data you have
          provided.
        </CustomLabel>
      </Row>
      <Row style={{ marginTop: "34.5px" }}>
        <Label>MY DATA</Label>
      </Row>
      <Separator margin="0px 0px 24px 0px" />

      <AccountBlock style={{ marginTop: "32px" }}>
        <Column>
          <CustomLabel color="#010102">
            <strong>Resume Upload</strong>
          </CustomLabel>
          <CustomLabel style={{ marginTop: "8px" }}>
            Uploaded on 01/01/2021
          </CustomLabel>
        </Column>
        <Column style={{ alignItems: "flex-end" }}>
          <GearIcon />
        </Column>
      </AccountBlock>

      <AccountBlock style={{ marginTop: "32px" }}>
        <Column>
          <CustomLabel color="#010102">
            <strong>Cloud Engineer</strong>
          </CustomLabel>
          <CustomLabel style={{ marginTop: "8px" }}>
            Applied on 01/01/2021
          </CustomLabel>
        </Column>
        <Column style={{ alignItems: "flex-end" }}>
          <GearIcon />
        </Column>
      </AccountBlock>

      <AccountBlock style={{ marginTop: "32px" }}>
        <Column>
          <CustomLabel color="#010102">
            <strong>Program Manager</strong>
          </CustomLabel>
          <CustomLabel style={{ marginTop: "8px" }}>
            Applied on 01/01/2021
          </CustomLabel>
        </Column>
        <Column style={{ alignItems: "flex-end" }}>
          <GearIcon />
        </Column>
      </AccountBlock>

      <Row style={{ marginTop: "42px", justifyContent: "flex-end" }}>
        <DeleteButton padding="8px 16px" color="#fff" bg="#EA3D2F">
          Delete Account
        </DeleteButton>
        <DeleteButton
          padding="8px 16px"
          color="#0A0529"
          bg="#fff"
          border="0.5px solid rgba(10, 5, 41, 0.32)"
        >
          Clear All Data
        </DeleteButton>
      </Row>
    </form>
  );
};

export default Accounts;
