import { makeStyles } from "@mui/styles";

export const config = {
  root: {
    fontSize: 16,
    margin: "0 0 .8rem 0",
    textTransform: "uppercase",
    fontWeight: (props) => (props.bold ? 500 : null),
    textAlign: (props) => (props.center ? "center" : "left"),
    color: (props) => props.color || null,
    "@media screen and (min-width: 992px)": {
      fontSize: 20,
    },
    "@media screen and (min-width: 1440px)": {
      fontSize: 24,
    },
  },
};

export default makeStyles(config);
