/** @jsx React.DOM */
var React = require('react');
var MonthDayCard = require('./month-day-card.js');
var _ = require('underscore');

var MonthWeekBoard = React.createClass({
  render: function () {
    var weekEvents = _.map(this.props.weekEvents, function(day, key) {
      return <MonthDayCard key = { key } day = { day } />
    });
    return (
      <div>
        <h5>Week Board</h5>
        { weekEvents }
      </div>
    );
  }
});

module.exports = MonthWeekBoard;