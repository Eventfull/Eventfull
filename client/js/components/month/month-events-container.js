/** @jsx React.DOM */
var React = require('react');
var MonthWeekBoard = require('./month-week-board');
var _  = require('underscore');

var MonthEventsContainer = React.createClass({
  render:function () {
    var monthWeeks = _.map(this.props.monthWeeks, function(weekData, key) {
      return <MonthWeekBoard key={ key } weekData={ weekData } />;
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