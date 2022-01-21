import React from "react";
import { Row, Column } from "components/structural";
import { H2, Label, Separator } from "components/typography";

import Snackbar from "components/notification";

import { ToggleSwitch, CustomLabel } from "../styled.component";

const Notifications = () => {
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
      <H2>Notifications</H2>
      <Separator margin="16px 0px 24px 0px" />

      <Row>
        <CustomLabel>Receive Email Notifications</CustomLabel>
        <ToggleSwitch />
      </Row>
      <Row style={{marginTop: "34.5px"}}>
        <Label>JOB</Label>
      </Row>
      <Separator margin="0px 0px 24px 0px" />

      <Row style={{ marginTop: "32px" }}>
        <CustomLabel>Receive notifications about status updates</CustomLabel>
        <ToggleSwitch />
      </Row>

      <Row style={{ marginTop: "32px" }}>
        <CustomLabel>Receive notifications about job opportunities</CustomLabel>
        <ToggleSwitch />
      </Row>

      <Row style={{ marginTop: "32px" }}>
        <CustomLabel>Receive notifications related to my resume</CustomLabel>
        <ToggleSwitch />
      </Row>
    </form>
  );
};

export default Notifications;
