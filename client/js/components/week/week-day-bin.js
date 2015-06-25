/** @jsx React.DOM */
var React = require('react');
var WeekEvent = require('./week-event');
var _ = require('underscore');

var WeekDayBin = React.createClass({
  render: function () {
    var weekEvents = _.map(this.props.day, function (event, key) {
      return <WeekEvent key={ key } event={ event } />;
    });

    return (
      <div className="bin">
        { weekEvents }
      </div>
    );
  }
});

module.exports = WeekDayBin;