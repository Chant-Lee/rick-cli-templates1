import React, { Suspense, lazy } from "react";

import { withRouter, Switch } from "react-router-dom";
import RouteManage from "./route_manage";
import Loading from "../components/page_loading";
import ErrorBoundary from "../components/error_boundary";

const Home = lazy(() => import("../pages/home"));

const ContentMain = (props: any) => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Switch>
            <RouteManage exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default withRouter(ContentMain);
