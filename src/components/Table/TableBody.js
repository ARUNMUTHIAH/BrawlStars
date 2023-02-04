import React from 'react';

const TableBody = (context) => {
	const { config: { headings }, data: brawlStar } = context;

	return <tr>
		{headings.map((heading, key) =>
			<td key={ key } className="body">
				{brawlStar[heading] === brawlStar.image
					?	<td>
						<img
							src={ brawlStar.image }
							alt="fs"
							width="100px"
							height="100px"
						/>
					</td>
					: brawlStar[heading]}
			</td>)}
	</tr>;
};

export default TableBody;
