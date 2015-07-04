/** @jsx React.DOM */
var React = require('react');
var MonthDayEvent = require('./month-day-event');
var Link = require('react-router-component').Link;
var moment = require('moment');

var MonthDayCard = React.createClass({
  render:function () {
    var weekNumber = Number(this.props.dayData.weekNumber);
    var dayNumber = parseInt(moment(this.props.dayData.dayNumber, 'YYYYMMDD').format('DD'), 10);
    var dayPath = '/day/' + this.props.dayData.dayNumber;

    var dayEvents = this.props.dayData.map(function (eventData, key) {
      return <MonthDayEvent key={key} eventData = { eventData } />
    });
    return (
      <div className="event-card month-event-card">
        <Link className="month-events-number" href={dayPath}>{ dayNumber }</Link>
        <div className="events-circle-list">{ dayEvents }</div>
      </div>
    );
  }
});

module.exports = MonthDayCard;
