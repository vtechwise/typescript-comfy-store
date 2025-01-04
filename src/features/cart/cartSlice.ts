import { toast } from "@/hooks/use-toast";
import { CartItem, CartState } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
  cartTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : defaultState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find((item) => {
        return item.cartID === newCartItem.cartID;
      });
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount;
      cartSlice.caseReducers.cacluatteTotals(state);
    },
    removeItem: () => {},
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    editItem: () => {},
    cacluatteTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
      toast({ description: "Item added to cart" });
    },
  },
});

export const { addItem, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
