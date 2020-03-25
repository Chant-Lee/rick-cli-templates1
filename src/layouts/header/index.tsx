import React from "react";
import { Link } from "react-router-dom";
import { Icon, Tooltip } from "antd";
import { projectName } from "../../project/config";

const styles = require("./index.module.less");

const IMG_URL = "/favicon.ico";
const TOOL_TIP = "Logout";

const HeaderBar = (props: HeaderProps) => {
  const { username, handleLogout } = props;

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <img className={styles.img} src={IMG_URL} alt="" />
        <Link to="/">
          <h3 className={styles.name}>{projectName}</h3>
        </Link>
      </div>
      <div className={styles.oprate}>
        <div className={styles.user}>
          <span>Hi, {username}</span>
          <Tooltip placement="bottom" title={TOOL_TIP}>
            <Icon type="logout" className={styles.off} onClick={handleLogout} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

interface HeaderProps {
  username: any;
  handleLogout: any;
  [key: string]: any;
}
export default HeaderBar;
