import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='searchBar'>
			<input 
				type='search' 
				placeholder='Search Friends By Name'
				onChange={searchChange}	
				/>
			</div>
		);
}

export default SearchBox;