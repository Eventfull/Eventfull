/** @jsx React.DOM */
var React = require('react');
var MonthCalendarContainer = require('./month-calendarcontainer.js');

var Link = require('react-router-component').Link;

var Month = React.createClass({
  render: function() {
    return (
      <div>
        <Link href='/week'>Week View</Link>
        <h1>Im the Month View</h1>
        <MonthCalendarContainer />
      </div>
    );
  }
});  

module.exports = Month; 
