/** @jsx React.DOM */
var React = require('react');

var DayHeader = React.createClass({
  render: function () {
    return (
      <div className="date-bar">
        <div className="arrow arrow-left"></div>
        <h2>{ this.props.day }</h2>
        <div className="arrow arrow-right"></div>
      </div>
    );
  }
});

module.exports = DayHeader;