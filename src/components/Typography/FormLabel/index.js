import React from "react";
import classNames from "classnames";
import useStyles from "./styles";
import { Text } from "./styles";

const FormLabel = ({
  size,
  textLabelColor,
  bold,
  center,
  margin,
  textDecoration,
  className,
  children,
  ...others
}) => {
  const classes = useStyles({ size, center, margin, textLabelColor, bold });

  return (
    <Text
      {...others}
      size={size}
      bold={bold}
      margin={margin}
      center={center}
      textLabelColor={textLabelColor}
      textDecoration={textDecoration}
      className={classNames(classes.root, className)}
    >
      {children}
    </Text>
  );
};

export default FormLabel;
