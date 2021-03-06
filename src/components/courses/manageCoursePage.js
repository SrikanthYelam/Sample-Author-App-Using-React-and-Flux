"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var Toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component){
            if(component.state.dirty && !confirm('Leave without saving?')){
                transition.abort();
            }
        }
    },

    getInitialState: function(){
        return {
            course: {id: '', title: '', length: '', category: ''},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function() {
        var courseId = this.props.params.id; //from the path 'author/:id'
        if(courseId){
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    setCourseState: function(event){
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },

    courseFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {}; 

        if(this.state.course.title.length < 5){
            this.state.errors.title = 'Title must be atleast 5 characters.';
            formIsValid = false;
        }
        if(this.state.course.category.length < 3){
            this.state.errors.category = 'Category must be atleast 3 characters.';
            formIsValid = false;
        }

        var reqFlag = true;
        if(this.state.course.length != null && this.state.course.length.trim() == ''){
            this.state.errors.length = 'Length is a required field.';
            formIsValid = false;
            reqFlag = false;
        }

        if(reqFlag == true && isNaN(parseFloat(this.state.course.length)){
            this.state.errors.length = 'Length should be a number.';
            formIsValid = false;
        }

        // if(!(isNaN(parseFloat(this.state.course.length)))){
        //     if(this.state.course.length > 1000){
        //         this.state.errors.length = 'Length should not be greater than 1000.';
        //     }
        // }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveCourse: function(event){
        event.preventDefault();
        
        if(!this.courseFormIsValid()){
            return;
        }
        
        if(this.state.course.id){
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }
        this.setState({dirty: false});
        Toastr.success('Course saved.');
        this.transitionTo('courses');
    },

    render: function () {
        return (
            <CourseForm course={this.state.course} onChange={this.setCourseState} onSave={this.saveCourse} errors = {this.state.errors}/>
        );
    }
});

module.exports = ManageCoursePage;