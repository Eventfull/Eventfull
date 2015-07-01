/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;
var NextMonth = require('./month-next-button');
var PrevMonth = require('./month-prev-button');

var MonthHeader = React.createClass({
  render: function () {
    return (
      <div className="date-bar">
        <div className="arrow arrow-left"></div>
        <h2>May 2015</h2>
        <div className="arrow arrow-right"></div>
      </div>
    );
  }
});

module.exports = MonthHeader;