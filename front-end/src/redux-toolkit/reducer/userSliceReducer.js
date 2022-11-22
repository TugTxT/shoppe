import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userSliceReducer = createSlice({
  name: "users",
  initialState: {
    user: {},

    id: 0,
    token: "",
    status: "idle",
    isLogin: false,
    isAdmin: false,
  },
  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.status = "idle";
      })

      .addCase(signup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        // state.token = action.payload.token;
        state.id = action.payload.id;
        state.status = "idle";
      });
  },
});

export const login = createAsyncThunk("users/login", async (user) => {
  try {
    const res = await axios.post("/users/login", {
      ...user,
    });
    // toast.success('Login successfully ^^')
    // window.location = "/furnituno";
    localStorage.setItem("firstLogin", true);
    // localStorage.setItem('refreshtoken',res.data.refreshToken)
    window.location = "/";
    return res.data.data;
  } catch (err) {
    console.log(err.response.data.msg);
  }
});
export const signup = createAsyncThunk("users/register", async (user) => {
  try {
    const res = await axios.post("/users/signup", {
      ...user,
      url: "hieune.com/",
    });
    window.location = "/set-password";
    return res.data.data;
  } catch (err) {
    console.log(err.response.data.msg);
  }
});
export const setPassword = createAsyncThunk("users/register", async (user) => {
  try {
    const res = await axios.post("/users/set-password", {
      ...user,
    });
    window.location = "/login";
    return res.data.data;
  } catch (err) {
    console.log(err.response.data.msg);
  }
});

export default userSliceReducer;
