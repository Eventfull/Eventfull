/** @jsx React.DOM */
var React = require('react');
var WeekHeader = require('./week-header');
var WeekBoard = require('./week-board');
var AddEvent = require('../actionbar/add-event');
var WeekStore = require('../../stores/week-store');
var weekData = require('../../weekData');
var _ = require('underscore');

var Week = React.createClass({
  // weekData is a temporary mock in place prior to server and db setup
  getInitialState: function () {
    return weekData;
  },
  componentDidMount: function () {
    WeekStore.addChangeListener(this.handleStoreChange);
  },
  handleStoreChange: function () {
    this.setState(WeekStore.getWeekData());
  },
  render: function () {
    return (
      <div>
        <WeekHeader />
        <WeekBoard days={ this.state }/>
      </div>
    );
  }
});

module.exports = Week;


