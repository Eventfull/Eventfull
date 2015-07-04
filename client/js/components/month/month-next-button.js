/** @jsx React.DOM */
var React = require('react');
var AppViewActions = require('../../actions/view-action-creator');
var moment = require('moment');

var MonthNextButton = React.createClass({
  handleClick: function () {
    var date = moment(this.props.year + this.props.month, 'YYYYMMM');
    date = date.add(1, 'month');
    AppViewActions.getMonthData(date);
  },
  render: function () {
    return (
      <div className="arrow arrow-right" onClick={this.handleClick}></div>
    );
  }
});

module.exports = MonthNextButton;
