import React from 'react';
import styled from 'styled-components';

export const FormWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormGroup = styled.div`
	position: relative;
`;

export const FormLabel = styled.label`
	display: block;
	font-size: 12px;
	font-weight: 300;
`;

export const FormControl = styled.input`
	position: relative;
	display: block;
	width: 100%;
	padding: 2px 5px;
`;

export const FormError = styled.span`
	position: absolute;
	top: 100%;
	left: 0;
	color: red;
	font-size: 12px;
`;
