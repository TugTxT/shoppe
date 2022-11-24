import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../redux-toolkit/reducer/userSliceReducer";
import orderSliceReducer from "./reducer/orderSliceReducer";
import productSliceReducer from "./reducer/productSliceReducer";

const store = configureStore({
  reducer: {
    users: userSliceReducer.reducer,
    product: productSliceReducer.reducer,
    orders: orderSliceReducer.reducer,
  },
});

export default store;
