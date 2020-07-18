import React, { useState } from 'react';

function Input() {
	const [ binaryValue, setBinaryValue ] = useState('');
	const [ errorState, setErrorState ] = useState(false);
	function handleChange(event) {
		const re = /^[01]+$/g;
		if (event.target.value === '' || re.test(event.target.value)) {
			setBinaryValue(event.target.value);
			setErrorState(false);
		} else {
			console.log(event.target.value);
			setErrorState(true);
		}
	}

	return (
		<div>
			<input name="input binary value" onChange={handleChange} maxLength={8} value={binaryValue} />
			<p>{binaryValue} </p>
			<h1>{errorState && <h2>ONLY 0 OR 1 </h2>}</h1>
		</div>
	);
}

export default Input;
