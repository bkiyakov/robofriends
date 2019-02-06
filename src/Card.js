import React from 'react';

const Card = ({ name, email, id, phone, city}) => {
	return (
		<div className='tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robophoto' src={`https://robohash.org/robot${id}?set=set2&200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{phone}</p>
				<p>{city}</p>
			</div>
		</div>
	);
}

export default Card;