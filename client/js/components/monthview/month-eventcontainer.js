/** @jsx React.DOM */
var React = require('react');
var Event = require('./month-event.js');

var MonthEventContainer = React.createClass({
  render:function() {
    return (
      <div>
        <h4>Month EventContainer</h4>
        <ul>
          <li><Event /></li>
          <li><Event /></li>
          <li><Event /></li>
          <li><Event /></li>
        </ul>
      </div>
    );
  }
});

module.exports = MonthEventContainer;