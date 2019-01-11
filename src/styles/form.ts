import React from 'react';
import styled from 'styled-components';

export const FormWrap = styled.div`
	display: flex;
`;

export const FormGroup = styled.div`
	position: relative;
	margin-bottom: 20px;
`;

export const FormLabel = styled.label``;

export const FormControl = styled.input`
	position: relative;
`;

export const FormError = styled.span`
	position: absolute;
	top: 100%;
	left: 0;
	color: red;
	font-size: 12px;
`;
