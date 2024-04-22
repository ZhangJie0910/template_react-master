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
    theListing: {},
    theBanner: {
        height: "570px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        backgroundSize: "cover"
    },
    theBannerOVerlay: {
        background: "transparent linear-gradient(0deg, #0000009e 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "-1px",
        left: "0",
        zIndex: 1,
    },
    theText: {
        position: 'relative',
        zIndex: 3,
        // position: "absolute",
        // bottom: "20%",
        // width: "80%",
    },
    theHorizontalText: {
        display: "flex",
        alignItems: "center",
        margin: "0 0 1rem 0",
    },
    theContent: {
        margin: '5rem 0'
    },
    theFilter: {


        // "& .": {
        //     width: "100%",
        //     // height: "30",
        // },

    },
    theFSlider: {
        margin: "0 0 1.5rem"
    },
    theCategory: {
        padding: "0 40px"
    },
    thCLabel: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "0 0 12px"
    },
    theCategoryName: {
        width: "90%"
    },
    theCategoryIcon: {
        color: '#7C7C7C'
    },
    theFlexCheck: {
        display: "flex",
        margin: "0 24px 24px",
        alignItems: 'center',
    },
    theDivider: {
        borderTop: "1px solid #7C7C7C",
        width: "100%",
        display: "block",
        margin: "0 0 1.5rem"
    },
    theFlexSort: {
        display: "flex",
        margin: "0 0 2rem 0",
        alignItems: 'center',
        borderBottom: '1px solid #848484',
        width: '100%',

        ...md("sm", {
            width: '40%',
        }),

        ...md("xmd", {
            width: '30%',
        }),
    },
    theSortLabel: {
        // width: "100%"
        margin: '0 24px 0 0'
    },
    theSortSelect: {
        width: "70%",
        margin: '0 0 2px'
    },
    theLCard: {
        position: 'relative',
        textDecoration: "none",
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
    theFullDivider: {
        borderTop: "1px solid #D6DDDD",
        width: "100%",
        margin: "3rem 0"
    },
    thePagination: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'column',

        ...md("sm", {
            flexDirection: 'row',
        }),
    },
    thePaginationText: {
        margin: '0 0 1rem'
    }
}

export default makeStyles(config);
