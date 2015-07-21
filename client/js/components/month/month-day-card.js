/** @jsx React.DOM */
var React = require('react');
var MonthDayEvent = require('./month-day-event');
var Link = require('react-router-component').Link;
var moment = require('moment');

var MonthDayCard = React.createClass({
  render:function () {
    var dayNumber = moment(this.props.dayData.dayNumber, 'YYYYMMDD').format('DD');
    var dayPath = '/day/' + this.props.dayData.dayNumber;

    var dayEvents = this.props.dayData.map(function (eventData, key) {
      return <MonthDayEvent key={key} eventData = { eventData } />
    });
    return (
      <div className="gig-card">
        <Link href={dayPath}><h2>{ dayNumber }</h2></Link>
        <div className="dot-list">{ dayEvents }</div>
      </div>
    );
  }
});

module.exports = MonthDayCard;
