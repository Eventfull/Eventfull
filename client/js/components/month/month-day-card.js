/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var MonthDayCard = React.createClass({
  render:function () {
    var currentDate = this.props.dayData.date;
    var dayPath = '/day/' + currentDate;
    return (
      <div>
        <p>Date: { this.props.dayData.date }</p>
        <p>Number of Events: { this.props.dayData.numEvents }</p>
        <p>Status: { this.props.dayData.status } </p>
        <Link href={dayPath}>Go to this Day</Link>
      </div>
    );
  }
});

module.exports = MonthDayCard;