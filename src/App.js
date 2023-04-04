import React from "react";

const App = () => {
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<h1>The count is: {count}</h1>
			<button onClick={() => setCount(count + 1)}>increment</button>
			<button onClick={() => setCount(count - 1)}>decrement</button>
			<button onClick={() => setCount(0)}>reset</button>
			<button onClick={() => setCount(count + 5)}>increment by 5</button>
		</div>
	);
};

export default App;
