/** @jsx React.DOM */
var React = require('react');

var MonthEvent = React.createClass({
  render:function() {
    return (
      <div className="event">
        <p>Wedding</p>
      </div>
    );
  }
});

module.exports = MonthEvent;