/** @jsx React.DOM */
var React = require('react');
var MonthCalendarContainer = require('./month-calendarcontainer.js');

var Month = React.createClass({
  render: function () {
    return (
      <div>
        <MonthCalendarContainer />
      </div>
    );
  }
});  

module.exports = Month; 
