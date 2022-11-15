import React from 'react';
import styles from './HostCounter.module.css';

const HostCounter = () => {
	const [count, setCount] = React.useState(0);
	
	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<div className={styles.counter}>HostCounter: {count}</div>
			<button onClick={increment}>increment</button>
		</div>

	);
}

export default HostCounter;