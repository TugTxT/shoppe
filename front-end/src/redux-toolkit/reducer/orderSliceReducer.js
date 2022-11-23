import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const orderSliceReducer = createSlice({
  name: "orders",
  initialState: {
    order: {},

    id: 0,
    token: "",
    status: "idle",
    isLogin: false,
    isAdmin: false,
  },
  extraReducers: (builder) => {
    builder

      .addCase(orderStatus.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(orderStatus.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(orderStatus.fulfilled, (state, action) => {
        state.order = action.payload;
        // state.id = action.payload.id;
        console.log(action.payload);
        state.status = "idle";
      });
  },
});

// export const setPassword = createAsyncThunk("users/register", async (user) => {
//   try {
//     const res = await axios.post("/users/set-password", {
//       ...user,
//     });
//     window.location = "/login";
//     return res.data.data;
//   } catch (err) {
//     console.log(err.response.data.msg);
//   }
// });

export const orderStatus = createAsyncThunk("orderStatus", async () => {
  try {
    const token = localStorage.getItem("token");
    // const id = localStorage.getItem("id");
    const res = await axios.post(
      "/order/shipping/status",
      { status: "Chờ vận chuyển" },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    const token = localStorage.getItem("token");
    console.log(token, "ssss");
  }
});

export default orderSliceReducer;
