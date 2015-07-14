/** @jsx React.DOM */
var React = require('react');
var ViewActionCreators = require('../../actions/view-action-creator');
var moment = require('moment');
var _ = require('underscore');

var WeekHeader = React.createClass({
  getInitialState: function() {
    var date = moment();
    return ({
      date: date
    })
  },

  handleWeekChange: function (e) {
    var direction = _.contains(e.target.classList, 'arrow-right') ? 'add' : 'subtract';
    var newWeek = this.state.date.clone();
    newWeek[direction](1, 'weeks');

    ViewActionCreators.getWeekData(newWeek);
    this.setState({ date: newWeek });
  },

  render: function () {
    var date = this.state.date.clone();

    // startOf and endOf will mutate the date object
    var weekStart = date.startOf('isoWeek').format('MMM DD');
    var weekEnd = date.endOf('isoWeek').format('MMM DD');
    var weekString = weekStart + ' - ' + weekEnd;

    return (
      <div className="date-bar">
        <div className="arrow arrow-left" onClick={ this.handleWeekChange }></div>
        <h2>{ weekString }</h2>
        <div className="arrow arrow-right" onClick={ this.handleWeekChange }></div>
      </div>
    );
  }
});

module.exports = WeekHeader;