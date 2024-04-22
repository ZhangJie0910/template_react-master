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
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  /* font-weight: ${(props) => props.fontWeight}; */
  font-weight: ${(props) => props.bold};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  text-decoration: ${(props) => props.textDecoration};
  text-transform: ${(props) => props.textTransform};

  /* &.size-200 {
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  &.size-300 {
    @media screen and (min-width: 320px) {
      font-size: 12px;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  &.size-400 {
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  &.size-500 {
    font-size: 1rem;
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 1.2rem;
    }
  }

  &.size-600 {
    font-size: 1rem;
    @media screen and (min-width: 768px) {
      font-size: 1.4rem;
    }

    @media screen and (min-width: 992px) {
      font-size: 1.8rem;
    }
  }

  &.size-700 {
    font-size: 1.4rem;
    @media screen and (min-width: 768px) {
      font-size: 2.4rem;
    }
  } */
`;

export default makeStyles(config);
