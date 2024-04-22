import styled from "styled-components";
import { TextField } from "@mui/material";

export const FormGroup = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb : "1rem")};
`;

export const TextInput = styled(TextField)`
  display: block !important;
  /* padding: 0.375rem 0.75rem !important; */
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.textColor};
  background: ${(props) => props.bg};
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
  }
  .MuiInput-underline {
    &:before {
      position: relative !important;
    }
  }
  /*.MuiInputBase-root-MuiOutlinedInput-root{
    color: unset;
  } */
  .MuiOutlinedInput-notchedOutline{
    border:${(props) => (props.border ? props.border : "unset")};
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
