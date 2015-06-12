/** @jsx React.DOM */
var React = require('react');
var MonthCalendarContainer = require('./month-calendarcontainer.js');
var MonthStore = require('../../stores/month-store.js');
var MonthHeader = require('./month-header.js');
var MonthData = require('../../monthData.js');

function monthData() {
  return {
    gigs: MonthStore.getMonthData()
  };
}

var Month = React.createClass({
  getInitialState: function() {
    console.log('monthdata', MonthData)
    return MonthData;
  },
  componentWillMount: function() {
    MonthStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    MonthStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(monthData());
  },
  render: function() {
    return (
      <div>
        <MonthHeader />
        <MonthCalendarContainer weeks={ this.state }/>
      </div>
    );
  }
});  

module.exports = Month; 
