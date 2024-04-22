import styled from "styled-components";
import { makeStyles } from "@mui/styles";
import { md } from "../../styles/responsive";
import { FormControl, Input } from "@mui/material";
import { width } from "@mui/system";
import { BorderBottom } from "@mui/icons-material";

export const CustomFormControl = styled(Input)`
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #1e1e1e;
  background-color: #eeeeee;
  background-clip: padding-box;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media screen and (min-width: 992px) {
    width: 100%;
  }

  .MuiInput-underline:before {
    border-bottom: none !important;
  }
  .MuiInput-underline:after {
    border-bottom: none !important;
  }
  .MuiInputBase-root {
    width: 100%;
  }
  .MuiInputBase-root {
    font-weight: 500 !important;
  }
`

const config = {

    theMarginBig: {
        marginBottom: "3rem"
    },

    theMarginMedium: {
        marginBottom: "2rem"
    },

    theProduct: {
        margin: "3rem 0 0"
    },
    theProductDetail: {
        margin: "0 0 3rem"
    },
    theFlex: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'column',

        ...md("md", {
            flexDirection: 'row',
        }),
    },
    theImageSlider: {
        width: "100%",
        margin: '0 0 1rem',

        ...md("md", {
            width: "49%",
            margin: '0',
        }),
    },
    theImageView: {
        margin: "0 0 10px"
    },
    theTransform: {
        transform: "rotate(90deg)"
    },
    theImageSmall: {
        width: "100%",
        height: "100px",
        // transform: "rotate(270deg)",

        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
    },
    theImageBig: {
        width: "100%",

        "& img": {
            width: "100%",
        }
    },
    theContent: {
        width: "100%",

        ...md("md", {
            width: "49%",
        }),
    },
    thCLabel: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "12px 0 12px",
        borderTop: "1px solid #0D0D0D",
    },
    theCategoryName: {
        width: "90%"
    },
    theCategoryIcon: {
        color: '#7C7C7C',
        margin: '0 10px 0 0',
    },
    theCategorySectionTwo: {
        background: "#D6DDDD",
        padding: "3rem 1rem",
        ...md("md", {
            padding: "3rem 9rem",
        }),
    },

    theCategoryOne: {
        display: "flex",
        flexDirection: "row",
    },

    theCategoryTitle: {
        width: "100%",
        ...md("md", {
            width: "28%",
        }),
    },

    theCategoryBorder: {
        display: "none",
        ...md("md", {
            display: "block",
            width: "100%",
        }),

        '& img': {
            width: "100%",
            paddingBottom: "4px",
        }
    },

    theLCard: {
        position: 'relative',
        textDecoration: "none",
        width: "95% !important",
        cursor: "pointer",
    },
    theLCTag: {

    },
    theLCTop: {
        position: 'relative',
        margin: '0 0 1.5rem'
    },
    theLTImage: {
        width: "100%",

        "& img": {
            width: "100%",
            height: "200px",
            objectFit: "cover",
        }
    },
    theColorFlex: {
        display: "flex",
        alignItems: "center",
        margin: '10px 0',
    },
    theColorCard: {
        width: "20px",
        height: "20px",
        margin: '0 10px 0 0',
        borderRadius: "2px",
    },
    theLCBottom: {
        position: 'relative'
    },
}

export default makeStyles(config);
