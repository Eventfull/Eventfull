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
  // weekData is a temporary mock in place prior to server and db setup
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {
    WeekStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.getWeekData();
  },
  handleStoreChange: function () {
    this.setState(WeekStore.getWeekData());
  },
  render: function () {
    var days = _.groupBy(this.state, function (day) {
      return moment(day.date).format('YYYYMMDD');
    });

    return (
      <div>
        <WeekHeader />
        <WeekBoard days={ days }/>
      </div>
    );
  }
});

module.exports = Week;


