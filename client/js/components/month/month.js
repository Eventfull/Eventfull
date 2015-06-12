/** @jsx React.DOM */
var React = require('react');
var MonthCalendarContainer = require('./month-calendarcontainer.js');
var MonthSidebar = require('./month-sidebar.js');
var MonthStore = require('../../stores/month-store.js');

var Link = require('react-router-component').Link;

function monthData() {
  return {
    gigs: MonthStore.getGigs()
  };
}

var Month = React.createClass({
  getInitialState: function() {
    return monthData();
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
        <MonthCalendarContainer weeks={this.state}/>
      </div>
    );
  }
});  

module.exports = Month; 
