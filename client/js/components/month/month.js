/** @jsx React.DOM */
var React = require('react');
var MonthCalendarContainer = require('./month-calendarcontainer.js');

var Month = React.createClass({
  render: function () {
    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <MonthCalendarContainer />
      </div>
    );
  }
});  

module.exports = Month; 
