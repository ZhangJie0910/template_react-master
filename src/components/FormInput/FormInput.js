import React from "react";
import FormLabel from "../Typography/FormLabel";
import { FormGroup, TextInput } from "./styles";

const FormInput = ({
  children,
  textLabelColor,
  bold,
  label,
  margin,
  bg,
  textColor,
  mb,
  border,
  ...props
}) => {
  return (
    <FormGroup mb={mb}>
      <FormLabel textLabelColor={textLabelColor} bold={bold} margin={margin}>
        {label}
      </FormLabel>
      <TextInput
      // onKeyPress={}
      bg={bg} textColor={textColor} border={border} {...props}>
        {children}
      </TextInput>
    </FormGroup>
  );
};

export default FormInput;
