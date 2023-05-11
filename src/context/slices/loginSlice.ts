import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LoginState {
	id: number;
	rol: string;
	firtsName: string;
	secondName: string;
	lastName: string;
}

const initialState: LoginState = {
	rol: 'USER',
	id: 0,
	firtsName: '',
	secondName: '',
	lastName: '',
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		updateLoginState: (state, action: PayloadAction<LoginState>) => {
			state.id = action.payload.id;
			state.rol = action.payload.rol;
			state.firtsName = action.payload.firtsName;
			state.lastName = action.payload.lastName;
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateLoginState } = loginSlice.actions;

export default loginSlice.reducer;
