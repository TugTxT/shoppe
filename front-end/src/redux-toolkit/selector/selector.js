import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.users.user;
export const selectIdUser = (state) => state.users.id;
export const selectTokenUser = (state) => state.users.token;
