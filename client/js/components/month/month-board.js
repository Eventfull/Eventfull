/** @jsx React.DOM */
var React = require('react');
var MonthWeekBin = require('./month-week-bin');
var _  = require('underscore');

var MonthBoard = React.createClass({
  render: function () {
    var monthWeeks = _.map(this.props.monthWeeks, function (weekData, key) {
      return <MonthWeekBin key={ key } weekNumber = {  parseInt(key) -1 } weekData={ weekData } />;
    });

    return (
      <div className="month-canvas">
        { monthWeeks }
      </div>
    );
  }
});

module.exports = MonthBoard;