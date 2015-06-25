/** @jsx React.DOM */
var React = require('react');
var MonthBoard = require('./month-board.js');
var MonthStore = require('../../stores/month-store');
var MonthHeader = require('./month-header');
var ViewActionCreator = require('../../actions/view-action-creator');

var Month = React.createClass({
  getInitialState: function () {
    return {
      'week1': [{date: '', numEvents: 0, status: ''}],
      'week2': [{date: '', numEvents: 0, status: ''}],
      'week3': [{date: '', numEvents: 0, status: ''}],
      'week4': [{date: '', numEvents: 0, status: ''}]
    };
  },
  componentWillMount: function () {
    MonthStore.addChangeListener(this._onChange);
    //trigger API call to get initial data
    ViewActionCreator.getMonthData();
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
        <MonthBoard monthWeeks= { this.state } />
      </div>
    );
  }
});  

module.exports = Month; 
