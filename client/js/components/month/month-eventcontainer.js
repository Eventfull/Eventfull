/** @jsx React.DOM */
var React = require('react');
var MonthWeek = require('./month-week-board.js');
var _  = require('underscore');

var MonthEventContainer = React.createClass({
  render:function() {
    var monthWeeks = _.map(this.props.monthEvents, function(week, key) {
      return <MonthWeek key={ key } week={ week } />;
    });

    return (
      <div>
        <h4>Month EventContainer</h4>
        { monthWeeks }
      </div>
    );
  }
});

module.exports = MonthEventContainer;