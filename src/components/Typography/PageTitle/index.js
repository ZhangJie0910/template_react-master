
import React from "react";
import classNames from "classnames";
import useStyles from "./styles";

const PageTitle = ({ size, color, bold, center, className, children, ...others }) => {
  const classes = useStyles({ size, center, color, bold });
  return (
    <h1 {...others} className={classNames(classes.root, className)}>
      {(children)}
    </h1>
  );
};

export default PageTitle;
