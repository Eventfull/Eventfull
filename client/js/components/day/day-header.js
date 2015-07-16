/** @jsx React.DOM */
var React = require('react');
var ViewActionCreator = require('../../actions/view-action-creator');

var DayHeader = React.createClass({

  getDefaultProps: function(){
    return {
      date: ''
    }
  },

  _loadYesterday: function(){
    var today = this.props.date;
    var yesterday = today.subtract(1, 'days');
    ViewActionCreator.getDayData(yesterday);
  },

  _loadTomorrow: function(){
    var today = this.props.date;
    var tomorrow = today.add(1, 'days');
    ViewActionCreator.getDayData(tomorrow);
  },

  render: function () {
    var date = this.props.date && this.props.date.format('MMMM DD YYYY') || '';

    return (
      <div className="date-bar">
        <div className="arrow arrow-left" onClick={this._loadYesterday}></div>
        <h2>{ date }</h2>
        <div className="arrow arrow-right" onClick={this._loadTomorrow}></div>
      </div>
    );
  }
});

module.exports = DayHeader;