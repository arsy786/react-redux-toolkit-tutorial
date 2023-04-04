import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy, reset } from "./redux/counter";

const App = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(reset());
	};

	const handleIncrementBy = (amount) => {
		dispatch(incrementBy(amount));
	};

	return (
		<div>
			<h1>The count is: {count}</h1>
			<button onClick={() => dispatch(increment())}>increment</button>
			<button onClick={() => dispatch(decrement())}>decrement</button>
			<button onClick={handleReset}>reset</button>
			<button onClick={() => handleIncrementBy(5)}>increment by 5</button>
		</div>
	);
};

export default App;
