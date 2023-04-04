# React Redux Toolkit Tutorial

React Redux is a popular library for managing the state of React applications. Redux Toolkit is a set of tools and utilities that simplify the process of building Redux applications.

Here's a step-by-step guide on how to use React Redux (Toolkit):

1. Install the required dependencies:

```bash
npm install react-redux redux @reduxjs/toolkit
```

2. Create a Redux store using configureStore function from Redux Toolkit. This function takes an object with the following properties:

- reducer: a function that combines all the reducers into a single reducer
- middleware: an array of middleware functions (optional)
- devTools: a boolean that enables the Redux DevTools browser extension (optional)

Here's an example of creating a Redux store:

```js
// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});

export default store;

/* Alternatively:
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
/*
```

3. Create a reducer that handles the state changes for a particular feature of your application. A reducer is a pure function that takes the current state and an action object, and returns the new state. You can use the createSlice function from Redux Toolkit to create a reducer with a predefined structure. Here's an example of creating a counter reducer using createSlice:

```js
// counter.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: 0,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		reset: (state) => {
			state.value = 0;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, reset, incrementByAmount } =
	counterSlice.actions;
export default counterSlice.reducer;
```

in this example, createSlice creates a reducer with the name counter, an initial state of 0, and two action creators: increment and decrement. The increment action creator increments the state by 1, and the decrement action creator decrements the state by 1.

4. Create a component that uses the Redux store. You can use the useSelector hook from react-redux to access the state values from the store, and the useDispatch hook to dispatch actions to the store. Here's an example of a component that uses the counter slice we defined earlier:

```js
// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function App() {
	const count = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(reset());
	};

	const handleIncrementByAmount = (amount: number) => {
		dispatch(incrementByAmount(amount));
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={handleReset}>Reset</button>
			<button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
		</div>
	);
}

export default App;
```

In this example, we use the useSelector hook to access the counter state value from the store, and the useDispatch hook to dispatch the increment and decrement actions when the corresponding buttons are clicked.

5. Wrap your root component with the Provider component from react-redux. This makes the Redux store available to all the components in your application. Here's an example:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
```
