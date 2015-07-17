/** @jsx React.DOM */
var React = require('react');
var MonthWeekBin = require('./month-week-bin');
var MonthDayPreview = require('./month-day-preview');
var moment = require('moment');
var _  = require('underscore');

var MonthBoard = React.createClass({
  render: function () {
    var startOfMonth = moment(this.props.startDate, 'YYYY-MM-DD').startOf('month');
    var dayOffset = startOfMonth.day();
    var numberOfWeeks = dayOffset > 4 ? 6 : 5;

    var firstDayLastMonth = startOfMonth.subtract(dayOffset, 'days');
    var startOfWeek = firstDayLastMonth;

    var monthWeeks = [], weekData;
    for(var week = 1; week <= numberOfWeeks; week++){
      weekData = this.props.monthWeeks[week] || {};
      monthWeeks.push(
        <MonthWeekBin
          key={ week }
          weekNumber={ week }
          weekData={ weekData }
          startOfWeek={ startOfWeek }
          month={ this.props.startDate }
        />
      );
      startOfWeek = startOfWeek.clone().add(1,'week');
    }

    return (
      <div className="month-canvas">
        <div className="col-md-8 col">
          <ul>
            <li><h3>sun</h3></li>
            <li><h3>mon</h3></li>
            <li><h3>tue</h3></li>
            <li><h3>wed</h3></li>
            <li><h3>thu</h3></li>
            <li><h3>fri</h3></li>
            <li><h3>sat</h3></li>
          </ul>
          { monthWeeks }
        </div>
        <MonthDayPreview />
      </div>
    );
  }
});

module.exports = MonthBoard;
