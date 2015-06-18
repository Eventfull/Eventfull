/** @jsx React.DOM */
var React = require('react');
var MonthDayCard = require('./month-day-card');
var _ = require('underscore');
var Link = require('react-router-component').Link

var MonthWeekBoard = React.createClass({
  render: function () {
    var weekEvents = _.map(this.props.weekEvents, function(day, key) {
      return <MonthDayCard key = { key } day = { day } />
    });
    /*Temporary hardedcoded value to show what route will be*/
    var weekNumber = 1;
    var weekPath = '/week/' + weekNumber;
    return (
      <div>
        <Link href= {weekPath} >Week View</Link>
        <h5>Week Board</h5>
        { weekEvents }
      </div>
    );
  }
});

module.exports = MonthWeekBoard;