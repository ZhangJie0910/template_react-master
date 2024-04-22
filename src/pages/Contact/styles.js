import styled from "styled-components";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Menu, Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { md } from "../../styles/responsive";

const config = {

    theContactSpaceTop:{
        marginTop:"3rem"
    },


    theContactSpaceBig: {
        marginBottom: "3rem",
    },

    theContactSpaceMedium: {
        marginBottom: "2rem",
    },

    theContactSpaceSmall: {
        marginBottom: "0.5rem",
    },


    theContactMap: {
        '& img': {
            width: "100%"
        }
    },

    theContactContent: {
        padding: "1rem 0 1rem 1.5rem",
        display: "flex",
        flexDirection: "column",
    },

    theContactContentOne: {
        display: "flex",
        flexDirection: "row",
    },

    theContactTitle: {
        width: "100%",
        ...md("md", {
            width: "50%"
        }),
    },

    theContactBorder: {
        display: "none",
        ...md("md", {
            display: "block",
        }),
        '& img': {
            width: "100%",
            paddingBottom: "4px",
        }
    },

    theContactContentTwo: {
        display: "flex",
        flexDirection: "row",
    },

    theContactLocation: {
        '& img': {
            width: "100%",
        }
    },

    theContactContentAll: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "2rem",
    },

    theContactEmail: {
        '& img': {
            width: "100%",
        }
    },

    theContactPhone: {
        '& img': {
            width: "100%",
        }
    },

    theContactSocialMedia: {
        display: "flex",
        flexDirection: "column",
    },

    theContactSocialMediaFlex: {
        display: "flex",
        flexDirection: "row",
    },

    theSocialMedia: {
        padding: "0 0.5rem 0 1rem",
        '& img': {
            width: "100%",
        }
    },

    theContactGetInTouch: {
        background: "#D6DDDD",
        padding: "3rem 1rem",
        ...md("md", {
            padding: "3rem 9rem",
        }),
    },

    theGetInTouchOne: {
        display: "flex",
        flexDirection: "row",
    },

    theGetInTouchTitle: {
        width: "100%",
        ...md("md", {
            width: "45%",
        }),
    },

    theGetInTouchBorder: {
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

    theBorderRadius: {
        borderRadius: "unset",
    },



};

export default makeStyles(config);