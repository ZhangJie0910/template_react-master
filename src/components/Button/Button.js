import React from "react";
import classNames from "classnames";
import { ButtonTag, Label } from "./styles";

export default function Button({
  color,
  bold,
  center,
  mb,
  textDecoration,
  style,
  children,
  pd,
  pv,
  bg,
  br,
  label,
  onLinkPress,
  size,
  flex,
  box,
  className,
  ...others
}) {
  return (
    <div {...others}>
      <ButtonTag
        flex={flex}
        style={style}
        mb={mb}
        pv={pv}
        bg={bg}
        br={br}
        pd={pd}
        box={box}
        className={classNames(className)}
      >
        <Label
          size={size}
          bold={bold}
          center={center}
          color={color}
          textDecoration={textDecoration}
        >
          {label}
        </Label>
      </ButtonTag>
    </div>
  );
}
