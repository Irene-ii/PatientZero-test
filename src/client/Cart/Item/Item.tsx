import { useState } from "react";
// Types
import { CartItemType } from "../../App";
// Styles
import {
  Wrapper,
  StyledButton,
  ButtonGroup,
  Image,
  StyledToolTips,
  StyledTypography,
  StyledAddIcon,
} from "./Item.styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <ButtonGroup onClick={() => handleClickOpen()}>
        <Image src={item.image} alt={item.title} />
        <div>
          <StyledTypography>{item.title}</StyledTypography>
          <StyledTypography>${item.price}</StyledTypography>
        </div>
      </ButtonGroup>
      <StyledToolTips title="Add one to cart" placement="bottom">
        <StyledButton
          onClick={() => handleAddToCart(item)}
          data-cy={`add-to-cart-${item.id}`}
        >
          {/* Add to cart */}
          <StyledAddIcon />
        </StyledButton>
      </StyledToolTips>

      <Dialog open={open} keepMounted onClose={() => handleClose()}>
        <DialogTitle>{item.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Image src={item.image} />
            <StyledTypography>Category:</StyledTypography>
            {item.category}
            <StyledTypography>Price:</StyledTypography>${item.price}
            <StyledTypography>Discription:</StyledTypography>
            {item.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

export default Item;
