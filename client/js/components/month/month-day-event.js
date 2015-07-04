/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;
var moment = require('moment');
var AppViewActions = require('../../actions/view-action-creator');

var MonthDayEvent = React.createClass({
  handleClick: function () {
    var date = moment(this.props.eventData.date, 'YYYY-MM-DD');
    AppViewActions.getDayData(date);
  },
  render: function () {
    if ( this.props.health < 4 ) {
      return ( <div onClick = { this.handleClick } className ="events-circle-red"></div>);
    } else if ( this.props.health < 10 ) {
      return ( <div onClick = { this.handleClick } className = "events-circle-blue"></div>);
    } else {
      return ( <div onClick = { this.handleClick } className = "events-circle-green"></div>);
    }
  }
});

module.exports = MonthDayEvent;
