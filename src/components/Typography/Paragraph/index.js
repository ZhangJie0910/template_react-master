import React from "react";
import classNames from "classnames";
import useStyles from "./styles";
import { Text } from "./styles";

const Paragraph = ({
  size,
  color,
  bold,
  center,
  margin,
  textDecoration,
  textTransform,
  className,
  children,
  innerHTML,
  ...others
}) => {
  const classes = useStyles({ center, margin, color, bold });

  // let sizeCustom = size;

  // let fontSize;
  // let fontWeight;

  // if (!sizeCustom) {
  //   sizeCustom = 200;
  // }

  // switch (sizeCustom) {
  //   case 200:
  //     fontSize = ".8rem";
  //     fontWeight = "normal";
  //     break;
  //   case 300:
  //     fontSize = "14px";
  //     fontWeight = "normal";
  //     break;
  //   case 400:
  //     fontSize = "16px";
  //     fontWeight = "normal";
  //     break;
  //   case 500:
  //     fontSize = "20px";
  //     fontWeight = "600";
  //     break;
  //   case 600:
  //     fontSize = "26px";
  //     fontWeight = "600";
  //     break;
  //   case 700:
  //     fontSize = "34px";
  //     fontWeight = "600";
  //     break;
  //   default:
  //     fontSize = ".8rem";
  //     fontWeight = "normal";
  // }

  return (
    <Text
      {...others}
      size={size}
      // fontWeight={fontWeight}
      bold={bold}
      margin={margin}
      center={center}
      color={color}
      textDecoration={textDecoration}
      textTransform={textTransform}
      className={classNames(classes.root, className)}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
