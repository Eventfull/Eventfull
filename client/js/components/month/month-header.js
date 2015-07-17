/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;
var MonthNavArrow = require('./month-nav-arrow');

var MonthHeader = React.createClass({
  render: function () {
    return (
      <div className="date-bar">
        <MonthNavArrow month={this.props.month} year={this.props.year} navDirection= {'left'} />
        <h2> {this.props.month} {this.props.year}</h2>
        <MonthNavArrow month={this.props.month} year={this.props.year} navDirection = {'right'} />
      </div>
    );
  }
});

module.exports = MonthHeader;
