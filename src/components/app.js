"use strict";

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./common/header');
var Footer = require('./common/footer');
global.$ = global.jQuery = require('jquery');

var App = React.createClass({
	render: function () {
		return (
			<div>
				<Header/>
				<div className="container-fluid">
					<RouteHandler/>
				</div>
				<Footer/>
			</div>
		);
	}
});

module.exports = App;