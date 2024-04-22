import React from "react";
import styled from "styled-components";

export const ButtonTag = styled.a`
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
  /* margin-top: ${(props) => (props.mt ? props.mt : "0")}; */
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")};
  padding: ${(props) => (props.pd ? props.pd : "0.4rem 2rem")};
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => (props.br ? props.br : "0")};
  display: ${(props) => (props.flex ? props.flex : "flex")};
  border: ${(props) => (props.box ? props.box : "unset")};
  cursor: pointer;
`;

export const Label = styled.p`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-weight: ${(props) => (props.bold ? props.bold : "normal")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
`;
