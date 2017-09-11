import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import GENRES from '../genres'


const Filter = ({onLabelClick}) => {

	let items = Object.entries(GENRES).map(genre => ({key: genre[0], value: genre[0], text: genre[1]}) )
	return (
		<div>
				<Dropdown onChange={onLabelClick} closeOnChange={true} placeholder='Select genres' fluid multiple search selection options={items} />
      	</div>
    )
}

export default Filter