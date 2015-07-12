/** @jsx React.DOM */
var React = require('react');

var DayHeader = React.createClass({
  render: function () {
    var date = this.props.date && this.props.date.format('MMMM DD YYYY') || '';

    return (
      <div className="date-bar">
        <div className="arrow arrow-left"></div>
        <h2>{ date }</h2>
        <div className="arrow arrow-right"></div>
      </div>
    );
  }
});

module.exports = DayHeader;