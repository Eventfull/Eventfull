/** @jsx React.DOM */
var React = require('react');
var WeekDayCard = require('./week-day-card');
var _ = require('underscore');

var WeekBoard = React.createClass({
  render: function(){
    var weekDayCards = _.map(this.props.days, function(day, key){
      return <WeekDayCard key={ key } day={ day } />;
    });

    return (
      <div className="canvas">
        { weekDayCards }
      </div>
    );
  }
});

module.exports = WeekBoard;