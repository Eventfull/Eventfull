/** @jsx React.DOM */
var React = require('react');
var _ = require('underscore');

var WeekEvent = React.createClass({
  render: function(){
    return (
      <div>
        <h5>{ this.props.event.title }</h5>
        <p>{ this.props.event.start }</p>
        <p>{ this.props.event.end }</p>
        <p>{ this.props.event.health  }</p>
        <p>{ this.props.event.staffRequired }</p>
        <p>{ this.props.event.staffConfirmed }</p>
      </div>
    );
  }
});

module.exports = WeekEvent;