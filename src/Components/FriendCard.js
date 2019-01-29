import React, { Component } from 'react';
import './FriendCard.css';

const FriendCard = (props) => {
	return (
		<div className="friend-card">
			<h2>{props.name}</h2>
			<p>Height: {props.height}</p>
			<p>Mass: {props.mass}</p>
			<p>Hair Color: {props.hair_color}</p>
			<p>Skin Color: {props.skin_color}</p>
			<p>Eye Color: {props.eye_color}</p>
			<p>Birth Year: {props.birth_year}</p>
			<p>Gender: {props.gender}</p>
		</div>
	);
}

export default FriendCard;