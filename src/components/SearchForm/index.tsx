import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, FormikActions, FormikProps } from 'formik';
import InnerForm, { Values } from './InnerForm';
import { fetchGifs, stopFetchGifs } from '../../reducers/search';

interface SearchFormProps {
	fetchGifs: (query: string, cb: () => void) => void;
	stopFetchGifs: () => void;
}
export class SearchForm extends Component<SearchFormProps, any> {
	innerForm = (props: FormikProps<Values>) => (
		<InnerForm {...props} stopFetchGifs={this.props.stopFetchGifs} />
	);

	handleSubmit = (values: Values, { setSubmitting }: FormikActions<Values> ) => {
		const { fetchGifs } = this.props;

		setSubmitting(true);
		fetchGifs(values.search, () => {
			setSubmitting(false);
		});
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
	fetchGifs,
	stopFetchGifs
})(SearchForm);
