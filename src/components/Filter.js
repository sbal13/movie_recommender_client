import React from 'react';
import { Dropdown, Grid} from 'semantic-ui-react'
import GENRES from '../genres'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'


const Filter = ({onLabelClick, yearRange, handleYear}) => {
	let currentYear = (new Date()).getFullYear()
	let items = Object.entries(GENRES).map(genre => ({key: genre[0], value: genre[0], text: genre[1]}) )
	return (
		<div className="filters">
			<Grid centered columns={1}>
		    <Grid.Row>
		    	<Dropdown onChange={onLabelClick} closeOnChange={true} placeholder='Select genres' fluid multiple search selection options={items} />
		    </Grid.Row>
		    <Grid.Row>
			<Grid.Column width={15}>
			<InputRange
		        maxValue={currentYear}
		        minValue={1920}
		        value={yearRange}
		        onChange={handleYear}/>
		    </Grid.Column>
		    </Grid.Row>
		     </Grid>

			
      	</div>
    )
}

export default Filter