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
    return {
      days: {}
    };
  },

  componentDidMount: function () {
    WeekStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.getWeekData(moment());
  },

  componentWillUpdate: function () {
    console.log('componentWillUpdate');
  },

  componentDidUpdate: function () {
    console.log('componentDidUpdate');
  },

  componentWillUnmount: function () {
    console.log('component unmounting');
  },

  handleStoreChange: function () {
    console.dir(JSON.parse(JSON.stringify('current this.state')));
    console.dir(JSON.parse(JSON.stringify(this.state, null, 2)));

    var weekData = WeekStore.getWeekData();
    console.dir(JSON.parse(JSON.stringify('new data arrives')));
    console.dir(JSON.parse(JSON.stringify(weekData, null, 2)));

    this.setState({ days: weekData });
    console.dir(JSON.stringify('updated this.state'));
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


