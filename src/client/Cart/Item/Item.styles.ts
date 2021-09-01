import styled from "styled-components";
import { withStyles, ButtonBase, Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

export const Wrapper = styled.div`
  background: FloralWhite;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 10px solid FloralWhite;
  border-radius: 20px;
  height: 100%;
`;

export const ButtonGroup = styled(ButtonBase)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;

  div {
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  max-height: 250px;
  min-height: 250px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

export const StyledToolTips = withStyles({
  tooltip: {
    fontSize: 15,
  },
})(Tooltip);

export const StyledButton = styled(Button)`
  border-radius: 0 0 20px 20px;
  background: Beige;
`;

export const StyledTypography = withStyles({
  root: {
    color: "DarkCyan",
    marginTop: "0.3rem",
    fontWeight: "bold",
    fontFamily: "Raleway",
  },
})(Typography);

export const StyledAddIcon = withStyles({
  root: {
    color: "steelBlue",
  },
})(AddIcon);
