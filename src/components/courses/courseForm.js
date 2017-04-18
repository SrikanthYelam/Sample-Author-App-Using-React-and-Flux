"use strict";

var React = require('react');
var Input = require('../common/textInput');
var CourseApi = require('../../api/courseApi');
var authors = [];
for(var i = 0; i < CourseApi.getAllCourses.length; i++) {
    authors.push(CourseApi.getAllCourses[i].author);
}

var CourseForm = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
            <form>
                <h1>Manage Course</h1>
                <Input name="title" label="Title" value={this.props.course.title} onChange={this.props.onChange} error={this.props.errors.title} />

                <Input name="category" label="Category" value={this.props.course.category} onChange={this.props.onChange} error={this.props.errors.category}/>

                <Input name="length" label="Length" value={this.props.course.length} onChange={this.props.onChange} error={this.props.errors.length}/>

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>

            </form>
        );
    }
});

module.exports = CourseForm;