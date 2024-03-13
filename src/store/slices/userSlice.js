import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(deleteUsers, () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
