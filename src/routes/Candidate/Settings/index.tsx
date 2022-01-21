import { FC, lazy, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import CandidateSettings from "./SettingsContainer/container/index";

const EditProfile = lazy(() => import("./EditProfile"));
const ChangePassword = lazy(() => import("./ChangePassword"));
const Notifications = lazy(() => import("./Notifications"));
const Accounts = lazy(() => import("./Accounts"));

const Routes: FC = () => {
  const { isDesktop } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        flex: 1,
        width: "100%",
      }}
    >
      <CandidateSettings />
      <Switch>
        <Route
          path="/candidate/settings/profile"
          component={EditProfile}
          exact
        />
        <Route
          path="/candidate/settings/password"
          component={ChangePassword}
          exact
        />
        <Route
          path="/candidate/settings/notifications"
          component={Notifications}
          exact
        />
        <Route path="/candidate/settings/account" component={Accounts} exact />
      </Switch>
    </div>
  );
};

export default Routes;
