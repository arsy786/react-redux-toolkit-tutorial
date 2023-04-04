import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		reset: (state) => {
			state.count = 0;
		},
		incrementBy: (state, action) => {
			state.count += action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementBy } =
	counterSlice.actions;

export default counterSlice.reducer;
