/** @jsx React.DOM */
var React = require('react');
var MonthDayEvent = require('./month-day-event');
var Link = require('react-router-component').Link;
var ViewActionCreator = require('../../actions/view-action-creator');
var classnames = require('classnames');
var moment = require('moment');
var _ = require('underscore');

var MonthDayCard = React.createClass({
  handleClick: function () {
    var date = moment(this.props.date, 'YYYY-MM-DD');
    ViewActionCreator.getDayData(date);
  },

  render: function () {
    var dayPath = '/day/' + this.props.date;
    var dayNumber = moment(this.props.date, 'YYYYMMDD').format('DD');

    var dayEvents = _.map(this.props.dayData, function (eventData, key) {
      return <MonthDayEvent key={ key } eventData ={ eventData } />
    });

    var cardClasses = classnames({
      'gig-card': true,
      'selected-date': this.props.currentDate.isSame(this.props.date, 'day')
    });

    var dateClasses = classnames({
      'off-calendar-date': !moment(this.props.month, 'YYYYMMDD').isSame(this.props.date, 'month')
    });

    return (
      <div className={ cardClasses } onClick={ this.handleClick }>
        <Link href={dayPath}><h2 className={ dateClasses }>{ dayNumber }</h2></Link>
        <div className="dot-list">{ dayEvents }</div>
      </div>
    );
  }
});

module.exports = MonthDayCard;
