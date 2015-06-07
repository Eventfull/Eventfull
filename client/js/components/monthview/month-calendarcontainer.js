/** @jsx React.DOM */
var React = require('react');
var MonthHeader = require('./month-header.js');
var MonthEventContainer = require('./month-eventcontainer.js');

var MonthCalendarContainer = React.createClass({
  render:function() {
    return (
      <div className="col-md-8">
        <h3>MonthCalendarContainer</h3>
        <MonthHeader />
        <MonthEventContainer />
      </div>
    );
  }
});

module.exports = MonthCalendarContainer;