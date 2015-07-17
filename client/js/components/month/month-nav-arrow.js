/** @jsx React.DOM */
var React = require('react');
var ViewActionCreator  = require('../../actions/view-action-creator');
var moment = require('moment');

var MonthNavArrow = React.createClass({
  handleClick: function () {
    var date = moment(this.props.year + this.props.month, 'YYYYMMM');
    date = this.props.navDirection === 'right' ? date.add(1,'month') : date.subtract(1,'month');
    ViewActionCreator .getMonthData(date);
  },
  render: function () {
    var navDirectionClass = "arrow arrow-" + this.props.navDirection;
    return (
      <div className= { navDirectionClass } onClick={this.handleClick}></div>
    );
  }
});

module.exports = MonthNavArrow
