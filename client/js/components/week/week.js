/** @jsx React.DOM */
var React = require('react');
var ViewActionCreators = require('../../actions/view-action-creator');
var WeekHeader = require('./week-header');
var WeekBoard = require('./week-board');
var AddEvent = require('../actionbar/add-event');
var WeekStore = require('../../stores/week-store');
var weekData = require('../../weekData');
var moment = require('moment');
var _ = require('underscore');

var Week = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    WeekStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.getWeekData(moment());
  },

  handleStoreChange: function () {
    var weekData = WeekStore.getWeekData();
    var days = _.groupBy(weekData, function (day, key) {
      return moment(day.date, "YYYY-MM-DD HH:mm:ss").format('YYYYMMDD');
    });
    this.setState({ days: days });
  },

  render: function () {
    return (
      <div>
        <WeekHeader />
        <WeekBoard days={ this.state.days } />
      </div>
    );
  }
});

module.exports = Week;


