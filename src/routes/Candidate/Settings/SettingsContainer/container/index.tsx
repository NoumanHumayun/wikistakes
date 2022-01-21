import { SettingsContainer } from "components/structural";

import { HeaderLink } from "components/typography";

const CandidateSettings = () => {
  return (
    <SettingsContainer>
      <HeaderLink to="/candidate/settings/profile"> Edit Profile</HeaderLink>
      <HeaderLink to="/candidate/settings/password"> Password</HeaderLink>
      <HeaderLink to="/candidate/settings/notifications">
        {" "}
        Notifications
      </HeaderLink>
      <HeaderLink to="/candidate/settings/account"> Account</HeaderLink>
    </SettingsContainer>
  );
};

export default CandidateSettings;
