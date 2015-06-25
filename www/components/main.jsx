import React from 'react';
import {RouteHandler} from 'react-router';

export default class Main extends React.Component {
	constructor(...props) {
		super(...props);

	}
	render() {
		return <div>main
            <RouteHandler/>
        </div>;
	}
}