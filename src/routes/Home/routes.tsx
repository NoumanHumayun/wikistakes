import React, { FC, lazy, Suspense } from "react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";

const Home = lazy(() => import("./Home"));
const Kwiki = lazy(() => import("./Kwiki"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
// const ViewJob = lazy(() => import("./ViewJob"));

const Routes: FC = () => {
  return (
    <Suspense fallback={<></>}>
      <HomeLayout>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/kwiki/:social" component={Kwiki} exact />
        {/* <Redirect to="/" /> */}
      </HomeLayout>
    </Suspense>
  );
};

export default Routes;
