/** @jsx React.DOM */
var React = require('react');

var WeekHeader = React.createClass({
  render: function () {
    return (
      <div className="date-bar">
        <div className="arrow arrow-left"></div>
        <h2>May 25 - May 30</h2>
        <div className="arrow arrow-right"></div>
      </div>
    );
  }
});

module.exports = WeekHeader;