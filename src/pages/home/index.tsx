import React, { useState, useCallback, useEffect } from "react";
import { useMappedState } from "redux-react-hook";

import { Spin } from "antd";
const styles = require("./index.module.less");

const CrawlerSchema = () => {
  const [loading, setLoading] = useState(false);

  const { home } = useMappedState(
    useCallback(
      state => ({
        home: state.home
      }),
      []
    )
  );
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Spin spinning={loading}>Home, {home.total}</Spin>
    </div>
  );
};

export default CrawlerSchema;
