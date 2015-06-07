/** @jsx React.DOM */
var React = require('react');
var MonthCalendarContainer = require('./month-calendarcontainer.js');
var MonthSidebar = require('./month-sidebar.js');
var MonthStore = require('../stores/month-store.js');

function getEvents() {
  return {events: MonthStore.getEvents()}
}

var Month = React.createClass({
  getInitialState: function() {
    return getEvents();
  },

  componentWillMount: function() {
    MonthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MonthStore.removeChangeListener(this._onChange)
  }

  _onChange: function() {
    this.setState(getEvents());
  },

  render: function() {
    return (
      <div className="row">
        <MonthSidebar />
        <MonthCalendarContainer />
      </div>
    );
  }
});  

module.exports = Month; 
