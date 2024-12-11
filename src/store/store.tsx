import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/card-slice";
import productsReducer from "./slices/products-slice";

const store = configureStore({
  reducer: {
    card: cardReducer,
    products: productsReducer,
  },
});
export interface CardItem {
    id: number;
    title: string;
    price: number;
    image:string;
    category:string;
    description:string;
    like:boolean;
  }

export interface RootState {
    card: CardItem[];
    products: CardItem[]; 
  }
export type AppDispatch = typeof store.dispatch;
export default store;