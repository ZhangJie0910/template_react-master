import styled, { keyframes } from "styled-components";
import { makeStyles } from "@mui/styles";
import { md } from "../../styles/responsive";
import { FormControl, Input } from "@mui/material";
import { width } from "@mui/system";


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
    theNavBar: {
        backgroundColor: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.45) 0px 20px 20px -20px",
        position: "relative",
    },

    theNBTop: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-between',

        ...md("md", {
            justifyContent: "center",
        }),
    },
    theLogo: {
        position: "relative",
        width: "200px",
        height: "100%",

        ...md("sm", {
            width: "323px",
            height: "97px",
        }),

        "& img": {
            width: "100%",
            // height: "30",
        },
    },
    theNBDivider: {
        borderTop: "1px solid #7C7C7C",
        width: "100%",
        display: "none",

        ...md("md", {
            display: "block",
        }),
    },
    theNBBottom: {
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 0",
        display: "none",

        ...md("md", {
            display: 'flex',
        }),

    },
    theNBMenu: {
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 0",
        display: 'flex',

        ...md("md", {
            display: "none",
        }),

    },
    theNBTopMob: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-between',
        padding: '6px 0'
    },
    theNBDividerMob: {
        borderTop: "1px solid #7C7C7C",
        width: "100%",
        display: "block",
    },
    theNBBottomMob: {
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 0",
        display: "flex",
        flexDirection: "column",

    },
    theNBBIcon: {
        // border: "1px solid #7C7C7C",
        // borderRadius: "10px",
        // display: 'flex',
        // alignItems: "center",
        // justifyContent: "center",
        // padding: '5px'
    },
    theLink: {
        textDecoration: "none",
        cursor: "pointer"
    },
    theShopNav: {
        display: "none",
        ...md("sm", {
        }),
        ...md("md", {
            display: "block",
            position: "absolute",
            right: "0",
            top: "99%",
            background: "#FFFFFF",
            width: "100%",
            transition: 'visibility 0s, opacity 0.5s linear',
            visibility: "visible",
            opacity: "1",
            height: "450px",
            boxShadow: "rgba(0, 0, 0, 0.45) 0px 20px 20px -20px",
            zIndex: "2"
        }),
    },
    theShopNavHide: {
        display: "none",
        ...md("sm", {
        }),
        ...md("md", {
            display: "block",
            position: "absolute",
            right: "0",
            top: "99%",
            background: "#FFFFFF",
            width: "100%",
            visibility: "hidden",
            opacity: "0",
            height: "450px",
            boxShadow: "rgba(0, 0, 0, 0.45) 0px 20px 20px -20px",
            zIndex: "2"
        }),
    },
    theSNContent: {
        margin: 'auto',
        width: "80%",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        // border: "1px solid #000",
        padding: "2% 4%",
    },
    theSNCLeft: {
        width: "20%",
        borderRight: "0.5px solid #707070",
        padding: "0 2%",
    },
    theSNCFlexStartBetween: {
        display: 'block',
        justifyContent: 'space-between',

        ...md("sm", {
            display: 'flex',
        }),
    },
    theSNCFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: "0 0 1.5rem",
        cursor: "pointer",
    },
    theSNCRight: {
        width: "70%",
        padding: "0 2%"
    },
    theShopNavMob: {
        display: "block",
        background: "#FFFFFF",
        width: "100%",
        transition: 'visibility 0s, opacity 0.5s linear',
        visibility: "visible",
        opacity: "1",
        height: "450px",

        ...md("md", {
            display: 'none'
        }),
    },
    theShopNavMobHide: {
        display: "block",
        width: "100%",
        background: "#FFFFFF",
        visibility: "hidden",
        opacity: "0",
        height: "450px",

        ...md("md", {
            display: 'none'
        }),
    },
    theSNContentMob: {
        margin: 'auto',
        // width: "100%",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        // border: "1px solid #000",
        padding: "2% 0",
    },
    theSNCLeftMob: {
        // width: "100%",
        borderBottom: "0.5px solid #707070",
        borderRight: "none",
        padding: "0 4%",

        ...md("sm", {
            width: "20%",
            borderRight: "0.5px solid #707070",
            borderBottom: "none",
            padding: "0 2%",
        }),
    },
    theSNCRightMob: {
        // width: "100%",
        padding: "4% 4%",
        overflowX: 'scroll',
        height: "280px",

        ...md("sm", {
            height: "320px",
        }),

        ...md("sm", {
            width: "70%",
            padding: "0 2%",
        }),
    },
};

export default makeStyles(config);
