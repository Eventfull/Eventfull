/** @jsx React.DOM */
var React = require('react');
var MonthBoard = require('./month-board');
var MonthStore = require('../../stores/month-store');
var MonthHeader = require('./month-header');
var ViewActionCreator = require('../../actions/view-action-creator');
var Day = require('../day/day');
var MonthDayPreview = require('./month-day-preview');
var moment = require('moment');

var Month = React.createClass({
  getInitialState: function () {
    return {
      startDate : moment().format('YYYY-MM-DD'),
      data: null
    };
  },
  componentWillMount: function () {
    var today = moment();
    MonthStore.addChangeListener(this._onChange);
    ViewActionCreator.getMonthData(today);
  },
  componentWillUnmount: function () {
    MonthStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState(MonthStore.getMonthData());
  },
  render: function () {
    var date = moment(this.state.startDate,'YYYY-MM-DD');
    var month = date.format('MMMM');
    var year= date.format('YYYY');
    return (
      <div className="row">
        <MonthHeader month={ month } year={ year } />
        <MonthBoard monthWeeks= { this.state.data } />
        <MonthDayPreview />
      </div>
    );
  }
});

module.exports = Month;
