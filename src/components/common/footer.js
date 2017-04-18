"use strict";

var React = require('react');

var Footer = React.createClass({
    render: function () {
        return (
            <nav className = "navbar navbar-default">
                <div className = "container-fluid">
                    <br/>
                    <span className = "nav navbar-nav"><i>@Sample Application using React and Flux</i></span>
                </div>
            </nav>
        );
    }
});

module.exports = Footer;