/** @jsx React.DOM */
var React = require('react');
var ViewActionCreators = require('../../actions/view-action-creator');
var moment = require('moment');
var _ = require('underscore');

var WeekHeader = React.createClass({
  getDefaultProps: function() {
    return ({
      startDate: moment()
    });
  },

  handleWeekChange: function (e) {
    var direction = _.contains(e.target.classList, 'arrow-right') ? 'add' : 'subtract';
    var newWeek = this.props.startDate.clone();
    newWeek[direction](1, 'weeks');

    ViewActionCreators.getWeekData(newWeek);
  },

  render: function () {
    var date = this.props.startDate.clone();

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