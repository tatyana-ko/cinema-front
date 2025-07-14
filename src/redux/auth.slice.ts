import { IUser } from '@/types/user.types';
import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
	user: IUser | null;
	isLoggedIn: boolean;
}

const initialState: IAuthState = {
	user: null,
	isLoggedIn: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthData: (state, actions) => {
      state.user = actions.payload.user,
      state.isLoggedIn = true
    },
		removeAuthData: (state) => {
      state.user = null,
      state.isLoggedIn = false
    },
	},
});

export const { setAuthData, removeAuthData } = authSlice.actions;
export default authSlice.reducer;
