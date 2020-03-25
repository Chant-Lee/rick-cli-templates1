import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";

import { menus } from "../../project/config";

const { Item, SubMenu } = Menu;

const MenuNav = (props: any) => {
  const pathname = props.location.pathname;

  const rank = pathname.split("/");

  const openKey =
    rank.length === 3 ? pathname.substr(0, pathname.lastIndexOf("/")) : "";
  const [openKeys, setOpenKeys] = useState([openKey]);
  const [currentKeys, setCurrentKeys] = useState([pathname]);

  const { theme } = props;
  useEffect(() => {
    const pathname = props.location.pathname;
    const openKey =
      rank.length === 3 ? pathname.substr(0, pathname.lastIndexOf("/")) : "";
    setCurrentKeys([pathname]);
    setOpenKeys([openKey]);
  }, [props.location.pathname, rank.length]);
  function renderMenuItem({ path, icon, title }: MenuItem): any {
    return (
      <Item key={path}>
        <Link to={path}>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Item>
    );
  }

  function handleOpenChange(openKeys: Array<string>): any {
    if (openKeys.length === 0 || openKeys.length === 1) {
      setOpenKeys(openKeys);
      return;
    }
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) {
      setOpenKeys(openKeys);
    } else {
      setOpenKeys([latestOpenKey]);
    }
  }
  function handleClickMenu({ key }: any): any {
    setCurrentKeys([key]);
  }
  function renderSubMenu({ path, icon, title, subs }: MenuItem) {
    return (
      <SubMenu
        key={path}
        title={
          <span>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
          </span>
        }
      >
        {subs &&
          subs.map(item => {
            return item.subs && item.subs.length > 0
              ? renderSubMenu(item)
              : renderMenuItem(item);
          })}
      </SubMenu>
    );
  }

  return (
    <Menu
      openKeys={openKeys}
      selectedKeys={currentKeys}
      theme={theme}
      mode="inline"
      onOpenChange={handleOpenChange}
      onClick={handleClickMenu}
    >
      {menus.map((item: any) => {
        return item.subs && item.subs.length > 0
          ? renderSubMenu(item)
          : renderMenuItem(item);
      })}
    </Menu>
  );
};

MenuNav.defaultProps = {
  theme: "light"
};

interface MenuItem {
  path: string;
  icon?: string;
  title?: string;
  subs?: Array<MenuItem>;
}
export default withRouter(MenuNav);
