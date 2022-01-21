import React from "react";
import { Row, ToggleSwitch } from "components/structural";
import { H2, Label, Separator, CustomLabel } from "components/typography";
import { ViewCard } from "components/cards";
import { ThemeContext } from "styled-components";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { NOTIFICATIONS_SETTINGS_CREATE, NOTIFICATIONS_SETTINGS_UPDATE } from "../mutations"
import { NOTIFICATIONS_SETTINGS } from "../queries";


const Notifications = () => {
  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });
  const [state, setState] = React.useState<any>({ checked: false });
  const candidateId = localStorage.getItem("id") || "";
  const [notificationSettingsCreate] = useMutation(NOTIFICATIONS_SETTINGS_CREATE);
  const [notificationSettingUpdate] = useMutation(NOTIFICATIONS_SETTINGS_UPDATE);

  const { data, loading, refetch } = useQuery(NOTIFICATIONS_SETTINGS, {
    variables: { candidateId },
    fetchPolicy: "network-only",
  });

  const { id ,email, status, opportunities, resume} = React.useMemo(() => {
    if (!loading && data?.notificationSettingsByCandidateId) {   
      return data?.notificationSettingsByCandidateId ?? [];
    }
    return {};
  }, [data, loading]);

  const { isDesktop } = React.useContext(ThemeContext);

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
        return notificationSettingsCreate({
          variables: { input: { candidateId } },
        });
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

  const onChange = React.useCallback(
    async (checked) => {
      if (!id) {
        await notificationSettingsCreate({
          variables: {
            input: {
              candidateId, email: checked, status: checked, opportunities: checked,
              resume: checked
            }

          },

        });
        refetch();
      }
      else {
        await notificationSettingUpdate({
          variables: {
            input: {
              id, email: checked, status: checked, opportunities: checked,
              resume: checked
            }
          }
        })
      }

      refetch();
      console.log(checked)
    },
    [refetch, state]
  );

  return (
    <ViewCard
      margin={isDesktop ? "64px auto" : "8px 0px 0px 0px"}
      style={isDesktop ? { maxWidth: "736px", width: "90%" } : {}}
    >
      <form onSubmit={onSubmit}>
        <H2>Notifications</H2>
        <Separator margin="16px 0px 24px 0px" />

        <Row>
          <CustomLabel>Receive Email Notifications</CustomLabel>
          <ToggleSwitch checked={email} onChange={onChange} />
        </Row>
        <Row style={{ marginTop: "34.5px" }}>
          <Label>JOB</Label>
        </Row>
        <Separator margin="0px 0px 24px 0px" />

        <Row style={{ marginTop: "32px" }}>
          <CustomLabel>Receive notifications about status updates</CustomLabel>
          <ToggleSwitch checked={status} onChange={onChange} />
        </Row>

        <Row style={{ marginTop: "32px" }}>
          <CustomLabel>
            Receive notifications about job opportunities
          </CustomLabel>
          <ToggleSwitch checked={opportunities} onChange={onChange} />
        </Row>

        <Row style={{ marginTop: "32px" }}>
          <CustomLabel>Receive notifications related to my resume</CustomLabel>
          <ToggleSwitch checked={resume} onChange={onChange} />
        </Row>
      </form>
    </ViewCard>
  );
};

export default Notifications;
