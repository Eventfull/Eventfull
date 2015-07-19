/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;
var moment = require('moment');

var MonthDayEvent = React.createClass({
  render: function () {
    var color = this.props.health === 10 ? 'green' : this.props.health < 4 ? 'red' : 'blue';
    return (
      <div className="dot-health"></div>
    );
  }
});

module.exports = MonthDayEvent;
