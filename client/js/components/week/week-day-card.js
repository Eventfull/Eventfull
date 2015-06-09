/** @jsx React.DOM */
var React = require('react');
var WeekEvent = require('./week-event');
var _ = require('underscore');

var WeekDayCard = React.createClass({
  render: function(){
    var weekEvents = _.map(this.props.day, function(event, key){
      return <WeekEvent key={ key } event={ event } />;
    });

    return (
      <div>
        <h5>Week Day Card</h5>
        { weekEvents }
      </div>
    );
  }
});

module.exports = WeekDayCard;