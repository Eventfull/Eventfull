/** @jsx React.DOM */
var React = require('react');
var MonthWeekBoard = require('./month-week-board.js');
var _  = require('underscore');

var MonthEventsContainer = React.createClass({
  render:function () {
    var monthWeeks = _.map(this.props.monthWeeks, function(weekEvents, key) {
      return <MonthWeekBoard key={ key } weekEvents={ weekEvents } />;
    });

    return (
      <div>
        <h4>Month EventsContainer</h4>
        { monthWeeks }
      </div>
    );
  }
});

module.exports = MonthEventsContainer;