/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;
var NextMonth = require('./month-next-button');
var PrevMonth = require('./month-prev-button');

var MonthHeader = React.createClass({
  render: function () {
    return (
      <div className="date-bar">
        <PrevMonth className="arrow arrow-left" month={this.props.month} year={this.props.year} />
        <h2>{this.props.month} {this.props.year}</h2>
        <NextMonth className="arrow arrow-right" month={this.props.month} year={this.props.year} />
      </div>
    );
  }
});

module.exports = MonthHeader;
