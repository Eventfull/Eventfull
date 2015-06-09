/** @jsx React.DOM */
var React = require('react');
var WeekEvent = require('./week-event');
var _ = require('../../utils/utils');

var WeekDayCard = React.createClass({
  render: function(){
    var weekEvents = _.map(this.props.data, function(item, key){
      return <WeekEvent key={ key } data={ item } />;
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