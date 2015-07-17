/** @jsx React.DOM */
var React = require('react');
var WeekDayBin = require('./week-day-bin');
var moment = require('moment');
var _ = require('underscore');

var WeekBoard = React.createClass({
  render: function () {
    var weekDayBins = _.map(this.props.days, function (day, key) {
      var date = moment(key, 'YYYYMMDD').format('MMMM Do');
      return <WeekDayBin key={ key } day={ day } date={ date } />;
    });

    return (
      <div className="canvas">
        { weekDayBins }
      </div>
    );
  }
});

module.exports = WeekBoard;
