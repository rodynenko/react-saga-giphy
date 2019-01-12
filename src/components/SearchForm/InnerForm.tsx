import React from 'react';
import { Form, Field, FormikProps } from 'formik';
import styled from 'styled-components';
import InputField from '../InputField';
import { Button } from '../../styles/button';
import { FormWrap } from '../../styles/form';

export interface Values {
	search: string;
}

const ButtonWithMargin = styled(Button)`
	margin-left: 15px;
`;

const InnerForm: React.SFC<FormikProps<Values>> = (props) => {
	const { isSubmitting } = props;

	return (
		<FormWrap as={Form}>
			<Field
				name="search"
		 		label="Search gif by name"
				component={InputField}
			/>
			<ButtonWithMargin isDisabled={isSubmitting} type="submit">Search</ButtonWithMargin>
			<ButtonWithMargin isDisabled={!isSubmitting} type="button">Stop</ButtonWithMargin>
		</FormWrap>
	);
}

export default InnerForm;
