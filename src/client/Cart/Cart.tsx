import CartItem from "./CartItem/CartItem";
import { Wrapper, StyledButton } from "./Cart.styles";
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  const PurchaseCheese = (items: CartItemType[]) => {
    console.log(typeof JSON.stringify(items));
    fetch(`/api/addItems`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      {cartItems.length === 0 ? null : (
        <StyledButton onClick={() => PurchaseCheese(cartItems)}>
          Purchase
        </StyledButton>
      )}
    </Wrapper>
  );
};

export default Cart;
