/** @jsx React.DOM */
var React = require('react');
var MonthDayCard = require('./month-day-card');
var _ = require('underscore');
var Link = require('react-router-component').Link;

var MonthWeekBin = React.createClass({
  render: function () {
    var weekNum = this.props.weekNumber;
    var weekEvents = _.map(this.props.weekData, function (dayData, key) {
      dayData.dayNumber = parseInt(key) + 1;
      dayData.weekNumber = weekNum;
      return <MonthDayCard key = { key } dayData = { dayData } />
    });
    /*Temporary hardedcoded value to show what route will be*/
    var weekNumber = 1;
    var weekPath = '/week/' + weekNumber;
    return (
      <div className="month-bin">
        { weekEvents }
      </div>
    );
  }
});

module.exports = MonthWeekBin;
