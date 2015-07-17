/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;
var moment = require('moment');
var ViewActionCreator = require('../../actions/view-action-creator');

var MonthDayEvent = React.createClass({
  handleClick: function () {
    var date = moment(this.props.eventData.date, 'YYYY-MM-DD');
    ViewActionCreator.getDayData(date);
  },
  render: function () {
    var color = this.props.health === 10 ? 'green' : this.props.health < 4 ? 'red' : 'blue';
    return (
      <div onClick={ this.handleClick } className={ 'events-circle-' + color } >
      </div>
    );
  }
});

module.exports = MonthDayEvent;
