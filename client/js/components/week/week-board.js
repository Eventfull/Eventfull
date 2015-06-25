/** @jsx React.DOM */
var React = require('react');
var WeekDayBin = require('./week-day-bin');
var _ = require('underscore');

var WeekBoard = React.createClass({
  render: function () {
    var weekDayBins = _.map(this.props.days, function (day, key) {
      return <WeekDayBin key={ key } day={ day } />;
    });

    return (
      <div className="canvas">
        { weekDayBins }
      </div>
    );
  }
});

module.exports = WeekBoard;