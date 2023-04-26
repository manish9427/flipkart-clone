import { useSelector } from "react-redux";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return <div>Hello</div>;
};
export default Cart;
