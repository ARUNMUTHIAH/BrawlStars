import React from 'react';
import TableBody from './Table/TableBody';
import TableHeader from './Table/TableHeader';

const Table = (context) => {
	const { state: { brawlStars }} = context;

	return (
		<table className="table">
			<TableHeader { ...context }/>
			{brawlStars.map((brawlStar, key) =>
				<TableBody
					key={ key }
					{ ...{
						...context,
						data: brawlStar,
					} }
				/>)}
		</table>
	);
};

export default Table;
