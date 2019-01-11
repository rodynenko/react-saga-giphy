import React, { Component } from 'react';
import InnerForm, { Values } from './InnerForm';
import { Formik, FormikActions, FormikProps } from 'formik';

export class SearchForm extends Component<any, any> {
	innerForm = (props: FormikProps<Values>) => <InnerForm {...props}/>;

	handleSubmit = (values: Values, { setSubmitting }: FormikActions<Values> ) => {
		console.log(values);
	};

	render() {
		return (
			<div>
				<Formik
					initialValues={{
						search: ''
					}}
					onSubmit={this.handleSubmit}
					render={this.innerForm}
				/>
			</div>
		);
	}
}

export default SearchForm;
