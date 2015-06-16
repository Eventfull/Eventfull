/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var MonthDayCard = React.createClass({
  render:function () {
    var currentDate = this.props.day.date;
    var dayPath = '/day/' + currentDate;
    return (
      <div>
        <p>Date: { this.props.day.date }</p>
        <p>Number of Events: { this.props.day.numEvents }</p>
        <p>Status: { this.props.day.status } </p>
        <Link href={dayPath}>Go to this Day</Link>
      </div>
    );
  }
});

module.exports = MonthDayCard;