/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Template = require('./components/app-template.js');
var Month = require('./components/month/month.js');
var Week = require('./components/week/week.js');
var Sidebar = require('./components/sidebar/sidebar.js');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var App = React.createClass({
  render: function () {
    return (
      <Template>
        <Sidebar />
        <Locations className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <Location path='/'      handler={Week}  />
          <Location path='/week'  handler={Week}  />
          <Location path='/month' handler={Month} />
          <NotFound               handler={Week} />
        </Locations>
      </Template>
    );
  }
})

React.render(<App/>, document.getElementById('content'));