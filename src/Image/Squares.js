import React from 'react';
import Square from './Square';

const Squares = ({ data }) =>
	data.map((square, key) =>
		<Square key={ key } { ...{ ...data, data: square } }/>);

export default Squares;
