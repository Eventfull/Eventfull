/** @jsx React.DOM */
var React = require('react');
var AppViewActions = require('../../actions/view-action-creator');

var MonthPrevButton = React.createClass({
  handleClick: function () {
    //TEMP The 'prev' argument passed in will be changed in the real impelementation
    AppViewActions.getMonthEvents('prev');
  },
  render: function () {
    return (
      <div> 
        <button className="month-prev" onClick={this.handleClick}>Prev Month</button>       
      </div>
    );
  }
});

module.exports = MonthPrevButton;