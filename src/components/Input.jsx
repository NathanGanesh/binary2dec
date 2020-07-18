import React, { useState } from 'react';

function Input() {
	const [ binaryValue, setBinaryValue ] = useState('');
	const [ errorState, setErrorState ] = useState(false);
	const [ numberValue, setNumberValue ] = useState(0);

	function handleChange(event) {
		const re = /^[01]+$/g;
		if (event.target.value === '' || re.test(event.target.value)) {
			setBinaryValue(event.target.value);
			setErrorState(false);
			let totalSum = 0;

			for (let inputValue = 0; inputValue < binaryValue.length + 1; inputValue++) {
				if (parseInt(binaryValue[inputValue]) !== 0) {
					let binary_value = parseInt(binaryValue[inputValue]);
					// let exp = Math.pow(binary_value, inputValue);
					totalSum += Math.pow(2, inputValue);
					setNumberValue(totalSum);
					// totalSum += parseInt(binaryValue[inputValue]);
				}
			}

			// console.log(totalSum);
		} else {
			setErrorState(true);
		}
	}

	return (
		<div>
			<input name="input binary value" onChange={handleChange} maxLength={8} value={binaryValue} />
			<p>{binaryValue} </p>
			<h1>{errorState && <h2>ONLY 0 OR 1 </h2>}</h1>
			<p>{numberValue}</p>
		</div>
	);
}

export default Input;
