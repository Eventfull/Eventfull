/** @jsx React.DOM */
var React = require('react');

var MonthEvent = React.createClass({
  render:function() {
    return (
      <div>
        <h5>{ this.props.day.numEvents }</h5>
        <p>{ this.props.day.status }</p>
      </div>
    );
  }
});

module.exports = MonthEvent;