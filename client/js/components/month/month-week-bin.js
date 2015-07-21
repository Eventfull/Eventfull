/** @jsx React.DOM */
var React = require('react');
var MonthDayCard = require('./month-day-card');
var _ = require('underscore');
var Link = require('react-router-component').Link;

var MonthWeekBin = React.createClass({
  render: function () {
    var weekNum = this.props.weekNumber;
    var weekEvents = _.map(this.props.weekData, function (dayData, key) {
      dayData.dayNumber = key;
      dayData.weekNumber = weekNum;
      return <MonthDayCard key = { key } dayData = { dayData } />
    });
    /*Temporary hardedcoded value to show what route will be*/
    return (
      <div className="bin month-bin">
        { weekEvents }
      </div>
    );
  }
});

module.exports = MonthWeekBin;
