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
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  theBannerIMG: {
    width: "100%",

    "& img": {
      width: "100%",
      height: "450px",
      objectFit: "cover",
      ...md("md", {
        height: "auto",
      }),
    },
  },
  theBannerOVerlay: {
    background: "transparent linear-gradient(180deg, #FFFFFF 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "-1px",
    left: "0",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  theBDivider: {
    width: "60%",
    height: "1px",
    backgroundColor: "#000",
    margin: "2% 0",
  },
  theBTitle: {
    fontSize: "24px",
    ...md("md", {
      fontSize: "50px"
    }),
  },
  theBButton: {
    margin: "10% 0 0"
  },
  theCategory: {
    margin: "1rem 0"
  },
  theCategory1: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    border: "0.25px solid #707070",
    flexDirection: "column",
    marginBottom: "2rem",
    cursor: 'pointer',
    ...md("md", {
      flexDirection: "row",
    }),
  },
  theC1Left: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRight: "none",
    height: "300px",
    ...md("md", {
      width: "30%",
      height: "500px",
      borderRight: "0.25px solid #707070",
    }),
    ...md("xxmd", {
      height: "700px",
    }),
  },
  theC1LTop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    height: "600px",
    width: "100%"
  },
  theC1LBottom: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    height: "100px",
    width: "-webkit-fill-available",
    borderTop: "0.25px solid #707070",
    borderBottom: "0.25px solid #707070",
    padding: "0 4%",
    ...md("md", {
      borderBottom: "none",
    }),
  },
  theC1LBText: {
    width: "80%"
  },
  theC1Right: {
    width: "100%",

    ...md("md", {
      width: "70%",
    }),
  },
  theC1RImg: {
    width: "100%",
    height: "300px",

    ...md("md", {
      height: "500px",
    }),
    ...md("xxmd", {
      height: "700px",
    }),

    "& img": {
      width: "100%",
      objectFit: "cover",
      height: "300px",
      ...md("md", {
        height: "500px",
      }),
      ...md("xxmd", {
        height: "700px",
      }),
    }
  },
  theCategoryFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: "column",
    marginBottom: "2rem",
    ...md("md", {
      flexDirection: "row",
    }),
    // ...md("md", {
    //   height: "700px",
    // }),
  },
  theCategory2: {
    width: "100%",
    height: "fit-content",
    border: "0.25px solid #707070",
    // borderBottom: "0.25px solid #707070",
    // borderLeft: "0.25px solid #707070",
    cursor: 'pointer',
    ...md("md", {
      width: "50%",
    }),
    // ...md("md", {
    //   height: "700px",
    // }),
  },
  theC2Top: {
    // height: "400px",
    // ...md("md", {
    //   height: "600px",
    // }),
  },
  theC2TImg: {
    width: "100%",
    height: "250px",
    ...md("md", {
      height: "450px"
    }),

    "& img": {
      width: "100%",
      objectFit: "cover",
      height: "250px",
      ...md("md", {
        height: "450px"
      }),
    },

  },
  theC2TText: {
    // margin: "2rem 0"

  },
  theC2Bottom: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: "100px",
    width: "-webkit-fill-available",
    borderTop: "0.25px solid #707070",
    padding: "4% 4%",
  },
  theCategory3: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "column",
    border: '0.25px solid #707070',
    marginBottom: "2rem",
    cursor: 'pointer',
    ...md("md", {
      flexDirection: "row",
    }),
  },
  theC3Left: {
    width: "100%",
    borderBottom: '0.25px solid #707070',

    ...md("md", {
      // width: "50%",
      // borderRight: '0.25px solid #707070',
      width: "70%",
      borderBottom: 'none',
      borderRight: '0.25px solid #707070',
    }),
    ...md("xxmd", {
    }),
  },
  theC3LImg: {
    width: "100%",
    height: "300px",
    ...md("md", {
      height: "500px",
    }),
    ...md("xxmd", {
      height: "700px",
    }),

    "& img": {
      width: "100%",
      objectFit: "cover",
      height: "300px",
      ...md("md", {
        height: "500px",
      }),
      ...md("xxmd", {
        height: "700px",
      }),
    }
  },
  theC3Right: {
    width: "-webkit-fill-available",
    height: "300px",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "0 4%",

    ...md("md", {
      width: "30%",
      height: "500px",
    }),
    ...md("xxmd", {
      height: "700px",
    }),
  },
  theProduct: {
    marginBottom: "4rem",
  },
  thePList: {
    padding: "0 2rem",

    "& .slick-track": {
      display: "flex",
      flexDirection: "row",
      alignItems: "inherit",
    },
    "& .slick-slide": {
      height: "inherit",
      "& > div": {
        // height: "100%",
      },
      "& > div > div": {
        // height: "100%",
      },
    },
    "& .slick-arrow": {
      color: "#fff",
      display: "flex!important",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,

      "&:before": {
        content: "",
        content: "\f053",
        display: "block",
        width: 24,
        height: 24,
        // backgroundPosition: "center center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
      },

      "&.slick-next": {
        right: "-6%",

        ...md("sm", {
          right: "-3%",
        }),

        ...md("md", {
          right: "-1.5%",
        }),

        "&:before": {
          content: "",
          content: "\f054!important",
          fontFamily: "Font Awesome 5 Free",
          fontWeight: 900,
          color: "#15AAA0",
          fontSize: "2rem",
        },
      },

      "&.slick-prev": {
        left: "-8%",

        ...md("sm", {
          left: "-4%",
        }),

        ...md("md", {
          left: "-2%",
        }),

        "&:before": {
          content: "",
          content: "\f053",
          fontFamily: "Font Awesome 5 Free",
          fontWeight: 900,
          color: "#848484",
          fontSize: "2rem",
        },
      },
      "&.slick-disabled": {
        opacity: 1,
      },
    },
  },
  thePTitle: {
    borderBottom: "2px solid #000",
    width: "fit-content",
    margin: '0 auto 2rem',
    padding: "0 2%",
  },
  theLCard: {
    position: 'relative',
    textDecoration: "none",
    margin: "0 1rem",
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
  theServices: {
    backgroundColor: "#15AAA0",
    width: "100%",
    padding: '3rem 0'
  },
  theSFlexStart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "0 0 2rem",

    ...md("sm", {
      justifyContent: 'flex-start',
    }),
  },
  theSFlexEnd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ...md("sm", {
      justifyContent: 'flex-end',
    }),
  },
  theFBox: {
    width: "33%",
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',

    ...md("sm", {
      width: "29%",
    }),

  },
  theServiceIcon: {
    width: "80px",
    margin: "0 0 10px",

    "& img": {
      width: "100%",
    },
  },
  theAImg: {
    height: "600px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    ...md("sm", {
      height: "500px",
    }),
  },
  theAContent: {
    width: "100%",
    margin: '0 auto',

    ...md("sm", {
      width: "80%",
    }),

    ...md("md", {
      width: "60%",
    }),
  },
  theAButton: {
    width: "fit-content",
    margin: "3rem auto 0"
  },
}

export default makeStyles(config);
