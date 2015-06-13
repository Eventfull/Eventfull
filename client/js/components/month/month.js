/** @jsx React.DOM */
var React = require('react');
var MonthEventsContainer = require('./month-eventcontainer.js');
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
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <MonthHeader />
        <MonthEventsContainer monthEvents= { this.state } />
      </div>
    );
  }
});  

module.exports = Month; 
