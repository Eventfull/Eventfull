/** @jsx React.DOM */
var React = require('react');
var DayStore = require('../../stores/day-store');
var WeekDayBin = require('../week/week-day-bin');
var tempData = require('../../weekData');
var _ = require('underscore');
var ViewActionCreator = require('../../actions/view-action-creator');
var moment = require('moment');

var MonthDayPreview = React.createClass({
  getInitialState: function () {
    return {
      date: moment(),
      gigs: null
    };
  },
  componentWillMount: function () {
    var today = moment();
    DayStore.addChangeListener(this._onChange);
    ViewActionCreator.getDayData(today);
  },
  componentWillUnmount: function () {
    DayStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState(DayStore.getData());
  },
  render: function () {
    var date = this.state.date ? this.state.date : moment();
    date = date.format('MMMM Do');

    return (
      <div className="col-md-4 col">
        <WeekDayBin day={ this.state.gigs } date={ date } />
      </div>
    );
  }
});

module.exports = MonthDayPreview;
