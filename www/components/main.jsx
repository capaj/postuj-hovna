import React from 'react';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

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