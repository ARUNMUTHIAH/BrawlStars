import React from 'react';

const Rank = ({ data: { brawlStar }}) =>
	<div>
		<img
			className="rank"
			src="/img/HEXOGON.jpeg"
			alt="noImage"
			width="50px"
			height="50px"
		/><span className="rankValue">{brawlStar.rank}</span>
	</div>;

export default Rank;
