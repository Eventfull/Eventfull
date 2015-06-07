/** @jsx React.DOM */
var React = require('react');

var MonthEvent = React.createClass({
  render:function() {
    return (
      <div className="event">
        <p>June 10th</p>
        <p>3 Events</p> 
      </div>
    );
  }
});

module.exports = MonthEvent;