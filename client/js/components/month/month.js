/** @jsx React.DOM */
var React = require('react');
var MonthBoard = require('./month-board');
var MonthStore = require('../../stores/month-store');
var DayStore = require('../../stores/day-store');
var MonthHeader = require('./month-header');
var ViewActionCreator = require('../../actions/view-action-creator');
var Day = require('../day/day');
var moment = require('moment');

var Month = React.createClass({
  getInitialState: function () {
    return {
      startDate : moment().format('YYYY-MM-DD'),
      data: {},
      currentDate: moment()
    };
  },
  componentWillMount: function () {
    MonthStore.addChangeListener(this.handleStoreChange);
    DayStore.addChangeListener(this.updateCurrentDate);

    var today = moment();
    ViewActionCreator.getMonthData(today);
  },
  componentWillUnmount: function () {
    MonthStore.removeChangeListener(this.handleStoreChange);
    DayStore.removeChangeListener(this.updateCurrentDate);
  },
  handleStoreChange: function () {
    this.setState(MonthStore.getMonthData());
  },
  updateCurrentDate: function () {
    this.setState({ currentDate: DayStore.getDate() });
  },
  render: function () {
    var date = moment(this.state.startDate,'YYYY-MM-DD');
    var month = date.format('MMMM');
    var year= date.format('YYYY');
    return (
      <div className="row">
        <MonthHeader month={ month } year={ year } />
        <MonthBoard monthWeeks={ this.state.data } startDate={ this.state.startDate } currentDate={ this.state.currentDate }/>
      </div>
    );
  }
});

module.exports = Month;
