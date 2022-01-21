import { FC, lazy, Suspense } from "react";
import { Route } from "react-router";
import CandidateLayout from "../../layouts/CandidateLayout";

const Home = lazy(() => import("./Home"));
const Applications = lazy(() => import("./Applications"));
const ViewApplication = lazy(() => import("./ViewApplication"));
const ViewJob = lazy(() => import("./ViewJob"));
const Settings = lazy(() => import("./Settings"));


const Routes: FC = () => {
  return (
    <Suspense fallback={<></>}>
      <CandidateLayout>
        <Route path="/candidate/" component={Applications} exact />
        <Route path="/candidate/applications" component={Applications} exact />
        <Route path="/candidate/applications/:jobId/:candidateId/view" component={ViewApplication} exact />
        <Route path="/candidate/jobs/:id/view" component={ViewJob} exact />
        <Route path="/candidate/settings" component={Settings}  />
      </CandidateLayout>
    </Suspense>
  );
};

export default Routes;
