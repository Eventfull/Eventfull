/** @jsx React.DOM */
var React = require('react');
var MonthDayCard = require('./month-day-card.js');
var _ = require('underscore');
var Link = require('react-router-component').Link

var MonthWeekBoard = React.createClass({
  render: function () {
    var weekEvents = _.map(this.props.weekEvents, function(day, key) {
      return <MonthDayCard key = { key } day = { day } />
    });
    var weekNumber = 1;
    var weekPath = '/week/' + weekNumber;
    return (
      <div>
         <h5>Should be a link here</h5>
        <Link href= {weekRoute} >Week View</Link>
        <h5>Week Board</h5>
        { weekEvents }
      </div>
    );
  }
});

module.exports = MonthWeekBoard;