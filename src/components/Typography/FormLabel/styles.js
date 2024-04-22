import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const config = {
  root: {
    // fontSize: 16,
    // margin: (props) => (props.margin ? "0 0 .8rem 0" : "0"),
    // fontWeight: (props) => (props.bold ? 500 : null),
    // textAlign: (props) => (props.center ? "center" : "left"),
    // color: (props) => props.color || null,
    // "@media screen and (min-width: 992px)": {
    //   fontSize: 20,
    // },
    // "@media screen and (min-width: 1440px)": {
    //   fontSize: 24,
    // },
  },
};

export const Text = styled.p`
  color: ${(props) => (props.textLabelColor ? props.textLabelColor : "#000")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  font-weight: ${(props) => props.bold};
  margin: ${(props) => (props.margin ? props.margin : "1rem 0")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  text-decoration: ${(props) => props.textDecoration};
`;

export default makeStyles(config);
