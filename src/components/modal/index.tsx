import React from "react";
import { Modal } from "antd";
const styles = require("./index.module.less");
interface CrawlerModalProps {
  visible: boolean;
  onOk?: (e: any) => void;
  onCancel?: (e: any) => void;
  [key: string]: any;
}

const CrawlerModal = (props: CrawlerModalProps) => {
  const { className: newClassName, ...others } = props;
  const defaultProps = { closable: false, centered: true };
  return (
    <Modal
      className={`${styles.crawlerModal} ${newClassName}`}
      {...defaultProps}
      {...others}
    />
  );
};

export default CrawlerModal;
