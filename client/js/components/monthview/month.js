/** @jsx React.DOM */
var React = require('react');
var MonthCalendarContainer = require('./month-calendarcontainer.js');
var MonthSidebar = require('./month-sidebar.js');

var Month = React.createClass({
  render: function() {
    return (
      <div className="row">
        <MonthSidebar />
        <MonthCalendarContainer />
      </div>
    );
  }
});  

module.exports = Month; 
