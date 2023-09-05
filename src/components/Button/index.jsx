import * as React from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import { purple } from '@mui/material/colors';

export default function UnstyledButtonsSimple(props) {
  console.log(props);
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton
        onClick={props.onClick}
        hover={props.hover}
        rounded={props.rounded}
        backgroundColor={props.backgroundColor}
        colors={props.colors}
        fontWeight={props.fontWeight}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {props.text}&nbsp;&gt;
        </div>
      </BootstrapButton>
      {/* <BootstrapButtonEx color = {props.color} backgroundColor = {props.backgroundColor} rounded = {props.rounded} hover = {props.hover}  onClick = {props.onClick}>{props.text}</BootstrapButtonEx> */}
    </Stack>
  );
}

const blue = {
  500: "black",
  600: "#0072E5",
  700: "#0059B2",
};

const BootstrapButton = styled(Button)(
  ({ theme, backgroundColor, hover, rounded, colors }) => ({
    fontSize: "0.8rem",
    padding: "15px 40px",
    lineHeight: 1,
    color: colors ? colors : "white",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    transition: "all 150ms ease",
    fontFamily: "sans-serif",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: hover === true ? "#212122" : backgroundColor,
    },
    "&:focus": {
      boxShadow: hover === true ? "#212122" : backgroundColor,
    },
    backgroundColor: backgroundColor ? backgroundColor : blue[500],
  })
);

// const BootstrapButtonEx = styled(Button)({
//   fontSize: '1.2rem',
//   padding: '15px 65px',
//   lineHeight: 1.5,
//   backgroundColor: `${(props) => props.backgroundColor ? props.backgroundColor : blue[500]}`,
//   color: `${props => props.color ? props.color: "white"}`,
//   borderRadius:`${props => props.rounded ? props.rounded: "8px"}`,
//   border: 'none',
//   cursor: "pointer",
//   transition: "all 150ms ease",
//   fontFamily: 'sans-serif',
//   fontWeight:500,
//   '&:hover': {
//     backgroundColor: `${(props) => props.hover === true && "#212122"}`
//   },
//   '&:focus': {
//     boxShadow: `${(props) => props.hover ===true && "#212122"}`,
//   },
// });
