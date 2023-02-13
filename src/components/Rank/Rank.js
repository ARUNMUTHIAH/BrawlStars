import React from 'react';

const Rank = ({ data: { brawlStar }}) =>
	<div>
		<img
			className="rank"
			src="/img/HEXOGON.jpeg"
			alt="noImage"
		/><span className="rankValue">{brawlStar.rank}</span>
	</div>;

export default Rank;
