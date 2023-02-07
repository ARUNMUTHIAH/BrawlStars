import React from 'react';

const BrawlersName = ({ data: { brawlStar }}) =>
	<label className="name">{brawlStar.name}</label>;

export default BrawlersName;
