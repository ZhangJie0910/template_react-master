import styled from "styled-components";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Menu, Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { md } from "../../styles/responsive";

const config = {

    theContactSpaceTop: {
        marginTop: "3rem"
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

    theAboutImg: {
        '& img': {
            width: "100%",
        }
    },

    theGetInTouchOne: {
        display: "flex",
        flexDirection: "row",
    },

    theGetInTouchTitle: {
        width: "100%",
        ...md("md", {
            width: "13%",
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

    theStoryText: {
        lineHeight: "20px",
    },


    theMissionOne: {
        display: "flex",
        flexDirection: "row",
    },

    theMissionTitle: {
        width: "100%",
        ...md("md", {
            width: "25%",
        }),
    },

    theMissionBorder: {
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

    theAboutMission: {
        position: "relative",
        '& img': {
            width: "100%",
        }
    },

    theAboutMissionContent: {
        position: "absolute",
        top: "50%",
        right: "6%",
        transform: "translate(0%, -50%)",
        width: "60%"
        // ...md("md", {
        //     transform: "translate(15%, 30%)",
        // }),

        // ...md("xxmd", {
        //     transform: "translate(15%, 100%)",
        // }),
    },

    theAboutVision: {
        position: "relative",
        '& img': {
            width: "100%",
        }
    },

    theAboutVisionContent: {
        position: "absolute",
        top: "50%",
        left: "6%",
        transform: "translate(0%, -50%)",
        width: "60%",
        // ...md("md", {
        //     transform: "translate(-15%, 30%)",
        // }),

        // ...md("xxmd", {
        //     transform: "translate(-15%, 100%)",
        // }),
    },

    theAboutMobileMission: {
        position: "relative",
        '& img': {
            width: "100%",
        }
    },

    theAboutMobileMissionContent: {
        position: "absolute",
        top: "10%",
        left: "50%",
        width: "80%",
        transform: "translate(-54%, 0%)",
        // ...md("xxs", {
        //     transform: "translate(0%, 30%)",
        // }),
        ...md("xs", {
            transform: "translate(-54%, 0%)",
        }),

    },

    theAboutMobileVision: {
        position: "relative",
        '& img': {
            width: "100%",
        }
    },

    theAboutMobileVisionContent: {
        position: "absolute",
        top: "10%",
        left: "50%",
        width: "80%",
        transform: "translate(-54%, 0%)",
        // ...md("xxs", {
        //     transform: "translate(0%, 30%)",
        // }),
        ...md("xs", {
            transform: "translate(-54%, 0%)",
        }),
    },
};

export default makeStyles(config);