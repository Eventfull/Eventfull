/** @jsx React.DOM */
var React = require('react');
var Event = require('./month-event.js');
var _  = require('underscore');

var MonthEventContainer = React.createClass({
  render:function() {
    var monthDayEvents = _.map(this.props.days, function(day, key) {
      return <Event key={ key } day={ day } />;
    });

    return (
      <div>
        <h4>Month EventContainer</h4>
        { monthDayEvents }
      </div>
    );
  }
});

module.exports = MonthEventContainer;