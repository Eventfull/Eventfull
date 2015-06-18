/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;
var NextMonth = require('./month-next-button');
var PrevMonth = require('./month-prev-button');

var MonthHeader = React.createClass({
  render:function () {
    return (
      <div>
        <Link href='/week'>Week View</Link>
        <h3>Im the Month Header</h3>
        <PrevMonth />
        <NextMonth />
      </div>
    );
  }
});

module.exports = MonthHeader;