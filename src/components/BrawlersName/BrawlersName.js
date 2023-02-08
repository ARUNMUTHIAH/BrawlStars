import React from 'react';

const BrawlersName = ({ data: { brawlStar }}) =>
	<span className="name">{brawlStar.name}</span>;

export default BrawlersName;
