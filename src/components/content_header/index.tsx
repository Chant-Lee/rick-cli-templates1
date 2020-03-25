import React from "react";

const ContentHeader = (props:ContentHead) => {
  return <h2>{props.name}</h2>;
};

interface ContentHead {
  name: string
}
export default ContentHeader;
