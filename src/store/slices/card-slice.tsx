import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardItem } from "../store";



const initialState: CardItem[] = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard(state, action: PayloadAction<CardItem>) {
      state.push(action.payload);
    },
    removeFromCard(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCard, removeFromCard } = cardSlice.actions;
export default cardSlice.reducer;
