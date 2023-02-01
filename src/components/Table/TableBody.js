import React from 'react';

const TableBody = (context) => {
	const { config: { headings }, data: brawlStar } = context;

	return <tr>
		{headings.map((heading, key) =>
			<td key={ key } className="body">{brawlStar[heading]}</td>)}
	</tr>;
};

export default TableBody;
