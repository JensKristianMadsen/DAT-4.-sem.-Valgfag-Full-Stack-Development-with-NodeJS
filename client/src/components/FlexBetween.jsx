import { Box } from "@mui/material"
import { styled } from "@mui/system"
//CSS as a component now you can use style component, you can name this component as you want. You can pass in CSS properties in here
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });
  
  export default FlexBetween;