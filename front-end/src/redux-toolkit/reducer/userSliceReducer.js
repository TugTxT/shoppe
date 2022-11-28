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
        state.status = "err";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "sucsec";
        state.token = action.payload.token;
        state.id = action.payload.id;
        console.log(action.payload);
      })

      .addCase(signup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        // state.token = action.payload.token;
        state.id = action.payload.id;

        state.status = "idle";
      })

      .addCase(acountInfor.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(acountInfor.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(acountInfor.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(action);
        state.status = "idle";
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(action.payload, "acion_payload");
        state.status = "idle";
      })

      .addCase(forgotPass.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(action.payload, "bbb");
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
    localStorage.setItem("token", res.data.data.token);
    localStorage.setItem("id", res.data.data.id);
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
export const setPassword = createAsyncThunk(
  "users/setpassword",
  async (user) => {
    try {
      const res = await axios.post("/users/set-password", {
        ...user,
      });
      window.location = "/login";
      return res.data.data;
    } catch (err) {
      console.log(err.response.data.msg);
    }
  }
);

export const acountInfor = createAsyncThunk("acountInfor", async () => {
  try {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const res = await axios.get(`/userEntities/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // const res= await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
    return res.data;
  } catch (err) {
    console.log(err.response.data.msg);
  }
});

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  try {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const res = await axios.post(
      "/users/update",
      {
        ...user,
        id: id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data.data;
  } catch (err) {
    console.log(err.response.data.msg);
  }
});

export const forgotPass = createAsyncThunk("users/forgotPass", async (user) => {
  try {
    const res = await axios.post("/users/forget-password", {
      ...user,
      url: "http://ijustforgotmypass.com/",
    });
    console.log(res.data);
    // window.location = "/set-password";
    return res.data;
  } catch (err) {
    console.log(err.response.data.msg);
  }
});

export default userSliceReducer;
