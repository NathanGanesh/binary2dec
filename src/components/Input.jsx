import React, { useState } from 'react';

function Input(props) {
	const [ binaryValue, setBinaryValue ] = useState('');

	function handleChange(event) {
		const re = /^[01]+$/g;
		if (event.target.value === '' || re.test(event.target.value)) {
			setBinaryValue(event.target.value);
		}
	}

	return (
		<div>
			<input name="input binary value" onChange={handleChange} maxLength={8} value={binaryValue} />
			<p>{binaryValue}</p>
		</div>
	);
}

export default Input;
