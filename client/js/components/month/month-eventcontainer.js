/** @jsx React.DOM */
var React = require('react');
var Event = require('./month-event.js');
var MonthWeek = require('./month-week.js');
var _  = require('underscore');

var MonthEventContainer = React.createClass({
  render:function() {
    var monthWeeks = _.map(this.props.weeks, function(week, key) {
      console.log('monthdayEvents', week, key);
      return <Event key={ key } week={ week } />;
    });

    return (
      <div>
        <h4>Month EventContainer</h4>
        <MonthWeek weeks = { monthWeeks } />
      </div>
    );
  }
});

module.exports = MonthEventContainer;