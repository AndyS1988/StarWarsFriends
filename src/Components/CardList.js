import React from 'react';
import FriendCard from './FriendCard';

const CardList = ({ friends }) => {
	return (
		<div>	
		{
			friends.map((friend, i) => {
				return (
					<FriendCard
						key={i}
						name={friends[i].name}
						height={friends[i].height}
						mass={friends[i].mass}
						hair_color={friends[i].hair_color}
						skin_color={friends[i].skin_color}
						eye_color={friends[i].eye_color}
						birth_year={friends[i].birth_year}
						gender={friends[i].gender}
						/>
				);
			})
		}			
		</div>	
	);
}

export default CardList;