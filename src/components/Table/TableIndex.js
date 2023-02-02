import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const TableIndex = (context) => {
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

export default TableIndex;
