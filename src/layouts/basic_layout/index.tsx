import React, { useCallback } from "react";
import { Layout } from "antd";
import { useDispatch, useMappedState } from "redux-react-hook";
import { LOGOUT_SUCCESS } from "../../redux/reducers/user";
import { logout } from "../../service/user";

import SiderNav from "../slider_nav/index";
import ContentMain from "../../routes/index";
import HeaderBar from "../header/index";
import "./index.less";

const { Sider, Header, Content } = Layout;

const BasicLayout = (props: any) => {
  const { theme } = props;

  const { user } = useMappedState(
    useCallback(
      state => ({
        user: state.user
      }),
      []
    )
  );

  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    logout().then(() => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    });
  }, [dispatch]);

  const { name } = user.userInfo;
  return (
    <Layout className="basic-layout">
      <Header className="basic-layout__header">
        <HeaderBar username={name} handleLogout={handleLogout} />
      </Header>
      <Layout>
        <Sider collapsible trigger={null} theme={theme}>
          <SiderNav />
        </Sider>
        <Content>
          <ContentMain />
        </Content>
      </Layout>
    </Layout>
  );
};

BasicLayout.defaultProps = {
  theme: "light"
};
export default BasicLayout;
