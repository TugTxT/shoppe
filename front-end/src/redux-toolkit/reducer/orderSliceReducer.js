import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const orderSliceReducer = createSlice({
  name: "orders",
  initialState: {
    order: "",
    orderList: [],
    id: 0,
    token: "",
    status: "idle",
    idOrder: "",
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
      })
      .addCase(orderList.fulfilled, (state, action) => {
        state.orderList = action.payload;
        // state.id = action.payload.id;
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

export const orderStatus = createAsyncThunk("orderStatus", async (status) => {
  console.log(status);
  try {
    const token = localStorage.getItem("token");
    const idOrder = localStorage.getItem("idOrder");
    const res = await axios.post(
      "/order/shipping/status",
      { status: status },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    localStorage.setItem("idOrder", res.data.data[0].id);
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {}
});

export const orderList = createAsyncThunk("orderList", async () => {
  try {
    const token = localStorage.getItem("token");
    const idOrder = localStorage.getItem("idOrder");
    const res = await axios.get(`/orderDetail/orderDetailByOrder/${idOrder}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.data;
  } catch (error) {}
});

export default orderSliceReducer;
