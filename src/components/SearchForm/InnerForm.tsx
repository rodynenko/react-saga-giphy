import React from 'react';
import { Form, Field, FormikProps } from 'formik';
import styled from 'styled-components';
import InputField from '../InputField';
import { Button } from '../../styles/button';
import { FormWrap } from '../../styles/form';

export interface Values {
	search: string;
}
export interface DispatcherType {
	stopFetchGifs: () => void;
}

const ButtonWithMargin = styled(Button)`
	margin-left: 15px;
`;

const InnerForm: React.SFC<FormikProps<Values> & DispatcherType> = (props) => {
	const { isSubmitting, stopFetchGifs } = props;

	function handleCancelClick() {
		stopFetchGifs();
	}

	return (
		<FormWrap as={Form}>
			<Field
				name="search"
		 		label="Search gif by name"
				component={InputField}
			/>
			<ButtonWithMargin isDisabled={isSubmitting} type="submit">Search</ButtonWithMargin>
			<ButtonWithMargin
				isDisabled={!isSubmitting}
				type="button"
				onClick={handleCancelClick}
			>
				Cancel
			</ButtonWithMargin>
		</FormWrap>
	);
}

export default InnerForm;
