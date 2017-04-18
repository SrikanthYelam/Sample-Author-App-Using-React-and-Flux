"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var CoursePage = require('./components/courses/coursePage');
var ManageCoursePage = require('./components/courses/manageCoursePage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./components/notFoundPage');

var routes = (
	<Route name="app" path="/" handler={App}>
        <DefaultRoute handler={HomePage} />
        <Route name="authors" handler={AuthorPage} />
        <Route name="addAuthor" path="author" handler={ManageAuthorPage} />
        <Route name="manageAuthor" path="author\/:id" handler={ManageAuthorPage} />
        <Route name="courses" handler={CoursePage} />
        <Route name="addCourse" path="course" handler={ManageCoursePage} />
        <Route name="manageCourse" path="course\/:id" handler={ManageCoursePage} />
        <Route name="about" handler={AboutPage} />
        <NotFoundRoute handler={NotFoundPage} />
        <Redirect from="about-us" to="about"/>
        <Redirect from="awthors" to="authors" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;