import React from 'react';
import { Form, Field, FormikProps } from 'formik';
import InputField from '../InputField';
import { Button } from '../../styles/button';
import { FormWrap } from '../../styles/form';

export interface Values {
	search: string;
}

const InnerForm: React.SFC<FormikProps<Values>> = (props) => {
	const { isSubmitting } = props;

	return (
		<FormWrap as={Form}>
			<Field
				name="search"
		 		label="Search gif by name"
				component={InputField}
			/>
			<Button isDisabled={isSubmitting} type="submit">Search</Button>
			<Button isDisabled={!isSubmitting} type="button">Stop</Button>
		</FormWrap>
	);
}

export default InnerForm;
