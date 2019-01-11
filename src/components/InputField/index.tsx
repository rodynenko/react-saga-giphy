import React from 'react';
import { FieldProps } from 'formik';
import { FormError, FormGroup, FormControl, FormLabel } from '../../styles/form';

interface CustomProps {
	label?: string;
	placeholder?: string;
	type?: string;
}

const InputField: React.SFC<FieldProps & CustomProps> = (props) => {
	const { field, label, placeholder, type, form } = props;
	const error = form.errors[field.name];

	return (
		<FormGroup>
			{label && <FormLabel>{label}</FormLabel>}
			<FormControl as="input" {...field} placeholder={placeholder} type={type} />
			{error && <FormError>{error}</FormError>}
		</FormGroup>
	)
}

InputField.defaultProps = {
	type: 'text'
};

export default InputField;
