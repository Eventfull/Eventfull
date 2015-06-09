/** @jsx React.DOM */
var React = require('react');
var WeekHeader = require('./week-header');
var WeekBoard = require('./week-board');
var _ = require('../../utils/utils');

var Week = React.createClass({
  render: function() {
    return (
      <div>
        <WeekHeader />
        <WeekBoard data={ this.state }/>
      </div>
    );
  }
});

module.exports = Week;


