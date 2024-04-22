import styled from "styled-components";
import { Block, Menu, Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { md } from "../../styles/responsive";

export const MenuIcon = styled(Menu)`
  color: ${({ color }) => color};
`;

export const FooterContainer = styled.div`
  // background: #acadaf;
  display: flex;
  align-items: center;
  // padding: 0.5rem 0;
  /* box-shadow: 1px -9px 5px -3px rgba(240,240,240,1); */
  position: relative;
  width: 100%;

  @media screen and (min-width: 992px) {
    // padding: 1rem 0;
  }
`;

export const FooterList = styled.div`
  display: block;
  width: 100%;
  text-align: left;
`;

export const NavbarUpper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

export const NavbarLower = styled.div`
  justify-content: center;
  display: flex;
  flex-grow: 1;
  padding: 1rem 0;
`;

export const NavbarLowerList = styled.div`
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  align-items: center;
  display: flex;
`;

export const NavbarLink = styled.a`
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold};
  align-items: center;
  display: flex;
  position: relative;
  margin-bottom: 8px;
  font-size: 14px;
  cursor: pointer;

  &:last-child {
    border-right: unset;
  }
`;

export const NavbarLogo = styled.a`
  width: 220px;

  @media screen and (min-width: 992px) {
    width: 180px;
  }

  @media screen and (min-width: 1440px) {
    width: 220px;
  }
  /* padding-top: 8px; */
  img {
    width: 120px;

    @media screen and (min-width: 992px) {
      width: 120px;
    }

    @media screen and (min-width: 1440px) {
      width: 120px;
    }
  }
`;


export const CustomInput = styled(TextField)`
  display: block !important;
  font-size: 12px;
  line-height: 1.5;
  background-clip: padding-box;
  /* border: 1px solid #eaeaea; */
  /* border: ${(props) => props.border}; */
  border-radius: 5px;
  
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
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px
  }
  .MuiInput-underline {
    &:before {
      position: relative !important;
    }
  }
  /*.MuiInputBase-root-MuiOutlinedInput-root{
    color: unset;

  } */
  .MuiOutlinedInput-input{
    padding: 12px 24px;
  }
  .MuiOutlinedInput-notchedOutline{
    // border:${(props) => (props.border ? props.border : "unset")};
    border-bottom: 1px solid #878787;
    border-left: 1px solid #878787;
    border-top: 1px solid #878787;
    border-right: 1px solid transparent;
  }

  .MuiInputBase-input-MuiOutlinedInput-input{
    color: #000;
    font-weight: 500;
  }
  .MuiInputBase-input-MuiOutlinedInput-input{
    color: #000;
    font-weight: 500;
  }
`;



const config = {
  theFooter: {
    borderTop: "1px solid #D6DDDD",
  },
  theFooterTop: {
    padding: "1rem 0",
  },
  theFooterBtm: {
    backgroundColor: "#15AAA0",
    padding: "1rem 0"
  },
  theFlex: {
    display: "flex",
  },
  theFlexButton: {
    display: "flex",
    justifyContent: "center",

    ...md("md", {
      justifyContent: "flex-start",
    }),
  },

  theFlexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  theFlexCenterParagraph: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  theIcon: {
    width: "25px",
    height: "25px",
    margin: "0 4px",

    "& img": {
      width: "100%",
    },
  },

  theCBox: {
    textDecoration: "none",
  },
  theCusBtn: {
    borderTopRightRadius: "10px !important",
    borderBottomRightRadius: "10px !important",
  }
};

export default makeStyles(config);
