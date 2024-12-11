import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardItem } from "../store";

const initialState: CardItem[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<CardItem[]>) {
      console.log(action.payload,"ew");
      
      return action.payload;
    },
    toggleLike(state, action: PayloadAction<number>) {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.like = !product.like;
      }
    },
    addProduct(state, action: PayloadAction<CardItem>) {
      
      state.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setProducts, toggleLike, addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
