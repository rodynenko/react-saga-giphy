import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, FormikActions, FormikProps } from 'formik';
import InnerForm, { Values } from './InnerForm';
import {fetchGifs} from '../../reducers/search';

interface SearchFormProps {
	fetchGifs: (query: string) => void;
}
export class SearchForm extends Component<SearchFormProps, any> {
	innerForm = (props: FormikProps<Values>) => <InnerForm {...props}/>;

	handleSubmit = (values: Values, { setSubmitting }: FormikActions<Values> ) => {
		this.props.fetchGifs(values.search);
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

export default connect(null, {
	fetchGifs
})(SearchForm);
