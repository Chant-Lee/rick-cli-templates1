import React, { useEffect, useCallback } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { useMappedState, useDispatch } from "redux-react-hook";
import { getUserInfo } from "./service/user";
import { SAVE_USER, LOGOUT_SUCCESS } from "./redux/reducers/user";
import PageLoading from "./components/page_loading";

import "./App.css";

import BasicLayout from "./layouts/basic_layout/index";
import Login from "./pages/login";
import RouteManage from "./routes/route_manage";
const App = (props: any) => {
  const { history } = props;
  const dispatch = useDispatch();
  const { user } = useMappedState(
    useCallback(
      state => ({
        user: state.user
      }),
      []
    )
  );
  const { loginStatus } = user;
  useEffect(() => {
    // 检查是否登陆
    getUserInfo()
      .then(data => {
        if (data.name) {
          dispatch({
            type: SAVE_USER,
            payload: { data }
          });
        }
      })
      .catch(err => {
        dispatch({
          type: LOGOUT_SUCCESS
        });
      });
  }, [dispatch]);

  useEffect(() => {
    switch (loginStatus) {
      default:
      case "waiting":
      case "login":
        break;
      case "logout":
        history.replace("/login");
        break;
    }
  }, [loginStatus, history]);

  function renderLogin(loginStatus: any) {
    switch (loginStatus) {
      case "login":
        return (
          <Switch>
            <RouteManage path="/" component={BasicLayout} />
            <Route path="/login" render={() => <Redirect to="/" />} />
          </Switch>
        );
      case "logout":
        return (
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        );
      default:
        return <PageLoading />;
    }
  }

  return <>{renderLogin(loginStatus)}</>;
};

export default withRouter(App);
