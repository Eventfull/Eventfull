/** @jsx React.DOM */
var React = require('react');

var MonthEvent = React.createClass({
  render:function() {
    return (
      <div>
        <p> { this.props.day.numGigs }</p>
        <p>  { this.props.day.status }</p>
      </div>
    );
  }
});

module.exports = MonthEvent;