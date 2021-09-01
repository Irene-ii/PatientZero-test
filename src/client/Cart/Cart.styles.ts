import styled from "styled-components";
import { withStyles, Button } from "@material-ui/core";

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

export const StyledButton = withStyles({
  root: {
    color: "steelBlue",
    width: "100%",
    height: "4rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    background: "Beige",
  },
})(Button);
