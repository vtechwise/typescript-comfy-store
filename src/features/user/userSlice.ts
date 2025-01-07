import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  username: string;
  jwt: string;
};

type UserState = {
  user: User | null;
};

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      
      const {username,jwt} = action.payload.
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
    }
  },
});

 export const {logoutUser,loginUser}= userSlice.actions

export default userSlice.reducer;
