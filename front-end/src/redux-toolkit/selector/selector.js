import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.users.user;
export const selectIdUser = (state) => state.users.id;
export const selectStatusLogin = (state) => state.users.status;
export const selectTokenUser = (state) => state.users.token;
export const selectOrderStatus = (state) => state.orders.order;
export const selectOrderList = (state) => state.orders.orderList;
