import { FC, lazy, Suspense } from "react";
import { Route } from "react-router";
import RecruiterLayout from "../../layouts/RecruiterLayout";

const Jobs = lazy(() => import("./Jobs"));
const ViewJob = lazy(() => import("./ViewJob"));
const Candidates = lazy(() => import("./Candidates"));
const Database = lazy(() => import("./Database"));
const ViewDB = lazy(() => import("./ViewDB"));
const Settings = lazy(() => import("./Settings"));
const Applicants = lazy(() => import("./Applicants"));
const Candidate = lazy(() => import("./Candidate"));

const Routes: FC = () => {
  return (
    <RecruiterLayout>
      <Suspense fallback={<></>}>
        <Route path="/recruiter/jobs" component={Jobs} exact />
        <Route path="/recruiter/jobs/:id/view" component={ViewJob} exact />
        <Route path="/recruiter/jobs/:id/applicants/:candidateId" component={Candidate} exact />
        <Route path="/recruiter/jobs/:id/applicants" component={Applicants} exact />
        <Route path="/recruiter/candidates" component={Candidates} exact />
        <Route path="/recruiter/database" component={Database} exact />
        <Route path="/recruiter/database/:id/view" component={ViewDB} exact />
        <Route path="/recruiter/settings" component={Settings} exact />
      </Suspense>
    </RecruiterLayout>
  );
};

export default Routes;
