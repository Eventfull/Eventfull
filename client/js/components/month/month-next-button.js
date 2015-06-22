/** @jsx React.DOM */
var React = require('react');
var AppViewActions = require('../../actions/view-action-creator');

var MonthNextButton = React.createClass({
  handleClick: function () {
    //TEMP The argument passed in will be a date in the real implementation
    AppViewActions.getMonthData('next');
  },
  render: function () {
    return  (
      <div>
        <button className ="month-next" onClick = {this.handleClick} > Next Month</button>
      </div>
    );
  }
});

module.exports = MonthNextButton;