import React from 'react';

const TableHeader = ({ config }) =>
	config.headings.map((heading, key) =>
		<th key={ key } className="header">{heading}</th>);

export default TableHeader;
