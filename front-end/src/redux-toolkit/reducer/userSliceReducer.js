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
        console.log(action.payload, "âa");
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
      "http://172.20.10.3:8081/users/update",
      {
        ...user,
        id: id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    window.location = "/login";
    return res.data;
  } catch (err) {
    console.log(err.response.data.msg);
  }
});

export default userSliceReducer;
