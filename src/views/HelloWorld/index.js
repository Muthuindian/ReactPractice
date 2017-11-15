import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';

export default class HelloWord extends Component {

	render() {
		return (
			<div>
				Hello,
				<Name name="aaa" place={"chennai"} list={[<div style={{color: 'red'}}>name</div>, 'places']}/>
			</div>
		);
	}

}