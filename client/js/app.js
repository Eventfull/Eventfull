/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Template = require('./components/app-template.js');
var Month = require('./components/monthview/month.js');
var Week = require('./components/week/week.js');
var Sidebar = require('./components/sidebar/sidebar.js');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var App = React.createClass({
  render: function(){
    return (
      <Template>
        <Sidebar />
        <Locations>
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