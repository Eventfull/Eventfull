/** @jsx React.DOM */
var React = require('react');
var MonthDayEvent = require('./month-day-event');
var Link = require('react-router-component').Link;
var moment = require('moment');
var _ = require('underscore');

var MonthDayCard = React.createClass({
  render: function () {
    var dayPath = '/day/' + this.props.date;
    var dayNumber = moment(this.props.date, 'YYYYMMDD').format('DD');

    var dayEvents = _.map(this.props.dayData, function (eventData, key) {
      return <MonthDayEvent key={ key } eventData ={ eventData } />
    });

    var styleDate = { color: moment(this.props.month, 'YYYYMMDD').isSame(this.props.date, 'month') ? '#7198C5' : '#DADADA' };

    return (
      <div className="gig-card">
        <Link href={dayPath}><h2 style={ styleDate }>{ dayNumber }</h2></Link>
        <div className="dot-list">{ dayEvents }</div>
      </div>
    );
  }
});

module.exports = MonthDayCard;
