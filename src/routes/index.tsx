import { FC, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import GlobalState from "context/GlobalContext";
import GenericLoader from "components/GenericLoader";

const Launch = lazy(() => import("./Launch"));
const SignUp = lazy(() => import("./Signup"));
const Login = lazy(() => import("./Login"));
const Candidate = lazy(() => import("./Candidate/routes"));
const Recruiter = lazy(() => import("./Recruiter/routes"));
const Home = lazy(() => import("./Home/routes"));
const CreatePassword = lazy(() => import("./CreatePassword"));

const roles: string[] = JSON.parse(localStorage.getItem("roles") || "[]");
const isLoggedIn = !!localStorage.getItem("token");
console.log(roles, isLoggedIn);
const PrivateRoute = (props: any) => {
  if (isLoggedIn) return <Route {...props} />;
  return <Redirect to="/signin" />;
};

const Routes: FC = () => {
  return (
    <Suspense
      fallback={
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <GenericLoader invert />
        </div>
      }
    >
      <GlobalState>
        {!isLoggedIn ? (
          <Switch>

        <Route path="/launch" component={Launch} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/rsignup" component={SignUp} exact />
            <Route path="/confirm/:token" component={CreatePassword} exact />
            <Route path="/signin" component={Login} exact />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <>
            {roles.includes("RECRUITER") ? (
              <Switch>
                <PrivateRoute
                  path={["/", "/recruiter/"]}
                  component={Recruiter}
                />
                <Redirect to="/" />
              </Switch>
            ) : (
              <Switch>
                <PrivateRoute path={"/candidate/"} component={Candidate} />
                <Route path="/" component={Home} />
              </Switch>
            )}
          </>
        )}
      </GlobalState>
    </Suspense>
  );
};

export default Routes;
