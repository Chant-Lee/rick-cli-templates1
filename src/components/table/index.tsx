import React from "react";
import { Table } from "antd";
const styles = require("./index.module.less");
const DEFAULT_PAGINATION = ["10", "25", "50", "100"];
interface CrawlerTableProps {
  components?: any;
  [key: string]: any;
}

const CrawlerTable = (props: CrawlerTableProps) => {
  const {
    pagination,
    pageSize = 10,
    components,
    className: newClassName,
    ...others
  } = props;
  const defaultPagination = {
    size: "small",
    showQuickJumper: false,
    hideOnSinglePage: true,
    pageSize: pageSize,
    pageSizeOptions: DEFAULT_PAGINATION,
    total: 0
  };
  return (
    <Table
      components={components}
      pagination={{ ...defaultPagination, ...pagination }}
      className={`${styles.crawlerTable} ${newClassName}`}
      {...others}
    />
  );
};

export default CrawlerTable;
