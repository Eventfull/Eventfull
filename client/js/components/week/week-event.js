/** @jsx React.DOM */
var React = require('react');
var _ = require('../../utils/utils');

var WeekEvent = React.createClass({
  render: function(){
    return (
      <div>
        <h5>{ this.props.data.title }</h5>
        <p>{ this.props.data.start }</p>
        <p>{ this.props.data.end }</p>
        <p>{ this.props.data.health  }</p>
        <p>{ this.props.data.totalStaffed[0] }</p>
        <p>{ this.props.data.totalStaffed[1] }</p>
      </div>
    );
  }
});

module.exports = WeekEvent;