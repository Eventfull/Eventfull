/** @jsx React.DOM */
var React = require('react');
var MonthEvent = require('./month-event.js');
var _ = require('underscore');

var MonthWeek = React.createClass({
  render: function() {
    var weekEvents = _.map(this.props.week, function(day, key) {
      return <MonthEvent key = { key } day = { day } />
    });
    return (
      <div>
        <h5>Week Board</h5>
        { weekEvents }
      </div>
    );
  }
});

module.exports = MonthWeek;