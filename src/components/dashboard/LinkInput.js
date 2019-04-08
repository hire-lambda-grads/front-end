import React from 'react';

const LinkInput = props => {
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				name={props.id}
				id={props.id}
				value={props.value || ''}
				onChange={props.handleInputChange}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default LinkInput;
