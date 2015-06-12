/** @jsx React.DOM */
var React = require('react');
var MonthHeader = require('./month-header.js');
var MonthEventContainer = require('./month-eventcontainer.js');

var MonthCalendarContainer = React.createClass({
  render:function() {
    return (
      <div>
        <h3>MonthCalendarContainer</h3>
        <MonthEventContainer weeks={ this.props.weeks }/>
      </div>
    );
  }
});

module.exports = MonthCalendarContainer;