import React from 'react';

const HostCounter = () => {
	const [count, setCount] = React.useState(0);
	
	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<div>HostCounter: {count}</div>
			<button onClick={increment}>increment</button>
		</div>

	);
}

export default HostCounter;