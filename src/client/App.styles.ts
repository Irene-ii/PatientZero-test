import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { AppBar, Typography, withStyles } from "@material-ui/core";

export const Wrapper = styled.div`
  margin: 0;
  border: 0;
  background: Beige;
  padding: 30px;
`;

// export const StyledButton = styled(IconButton)`

// `;

export const StyledButton = withStyles({
  label: {
    flexDirection: "column",
  },
})(IconButton);

export const StyledAppBar = styled(AppBar)`
  background: white;
  margin-bottom: 15px;
  border-radius: 20px;
`;

export const HeaderTypography = withStyles({
  root: {
    color: "SteelBlue",
    fontFamily: "Gloria Hallelujah",
  },
})(Typography);
