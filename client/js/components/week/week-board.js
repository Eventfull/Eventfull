/** @jsx React.DOM */
var React = require('react');
var WeekDayCard = require('./week-day-card');
var _ = require('../../utils/utils');

var WeekBoard = React.createClass({
  render: function(){
    var weekDayCards = _.map(this.props.data, function(item, key){
      return <WeekDayCard key={ key } data={ item } />;
    });

    return (
      <div>
        <h5>Week Board</h5>
        { weekDayCards }
      </div>
    );
  }
});

module.exports = WeekBoard;