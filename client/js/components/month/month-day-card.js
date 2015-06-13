/** @jsx React.DOM */
var React = require('react');

var MonthDayCard = React.createClass({
  render:function () {
    return (
      <div>
        <p>Date: { this.props.day.date }</p>
        <p>Number of Events: { this.props.day.numEvents }</p>
        <p>Status: { this.props.day.status } </p>
      </div>
    );
  }
});

module.exports = MonthDayCard;