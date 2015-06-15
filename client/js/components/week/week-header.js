/** @jsx React.DOM */
var React = require('react');

var WeekHeader = React.createClass({
  render: function () {
    return (
      <div className="date-bar">
        <div className="arrow arrow-left"></div>
        <h2>May 25</h2>
        <div className="arrow arrow-right"></div>
      </div>
    );
  }
});

module.exports = WeekHeader;