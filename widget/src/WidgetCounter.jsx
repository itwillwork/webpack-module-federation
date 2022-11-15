import React from 'react';

const WidgetCounter = () => {
	const [count, setCount] = React.useState(0);
	
	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<div>WidgetCounter: {count}</div>
			<button onClick={increment}>increment</button>
		</div>

	);
}

export default WidgetCounter;