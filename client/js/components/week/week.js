/** @jsx React.DOM */
var React = require('react');
var WeekHeader = require('./week-header');
var WeekBoard = require('./week-board');
var weekData = require('../../weekData');
var _ = require('underscore');

var Week = React.createClass({
  getInitialState: function () {
    return weekData;
  },
  render: function () {
    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <WeekHeader />
        <WeekBoard days={ this.state }/>
      </div>
    );
  }
});

module.exports = Week;


