/** @jsx React.DOM */
var React = require('react');
var _ = require('underscore');

var WeekEvent = React.createClass({
  render: function () {
    return (
      <div>
        <h5>{ this.props.event.title }</h5>
        <p>{ this.props.event.startTime }</p>
        <p>{ this.props.event.endTime }</p>
        <p>{ this.props.event.date  }</p>
        <p>{ this.props.event.health }</p>
        <p>{ this.props.event.addressOne }</p>
        <p>{ this.props.event.addressTwo }</p>
        <p>{ this.props.event.city }</p>
        <p>{ this.props.event.state }</p>
        <p>{ this.props.event.zip }</p>
      </div>
    );
  }
});

module.exports = WeekEvent;