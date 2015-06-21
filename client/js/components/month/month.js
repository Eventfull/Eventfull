/** @jsx React.DOM */
var React = require('react');
var MonthEventsContainer = require('./month-events-container.js');
var MonthStore = require('../../stores/month-store');
var MonthHeader = require('./month-header');
var MonthData = require('../../monthData');

var Month = React.createClass({
  getInitialState: function () {
    return MonthData;
  },
  componentWillMount: function () {
    MonthStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    MonthStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    //Temporary console.log to make sure flux is working
    //Once have actual data to pull from server will remove
    console.log('Month onChange');
    this.setState(MonthStore.getMonthData());
  },
  render: function () {
    return (
      <div>
        <MonthHeader />
        <MonthEventsContainer monthWeeks= { this.state } />
      </div>
    );
  }
});  

module.exports = Month; 
