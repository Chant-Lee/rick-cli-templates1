import React from "react";

import { Spin } from "antd";

const style = require("./index.module.less");

export default () => (
  <div className={style.wrapper}>
    <Spin tip="Loading..." size="large" delay={100} />
  </div>
);
