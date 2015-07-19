/** @jsx React.DOM */
var React = require('react');
var MonthDayCard = require('./month-day-card');
var _ = require('underscore');
var Link = require('react-router-component').Link;

var MonthWeekBin = React.createClass({
  render: function () {
    var weekDays = [], date = this.props.startOfWeek, dayData;
    for(var day = 0; day < 7; day++){
      dayData = this.props.weekData[date.format('YYYYMMDD')] || {};
      weekDays.push(
        <MonthDayCard
          key={ day }
          dayData={ dayData }
          date={ date }
          month={ this.props.month }
          currentDate= { this.props.currentDate }
        />
      );
      date = date.clone().add(1, 'day');
    }

    return (
      <div className="bin month-bin">
        { weekDays }
      </div>
    );
  }
});

module.exports = MonthWeekBin;
