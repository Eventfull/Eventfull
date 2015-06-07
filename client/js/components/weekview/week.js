/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var Week = React.createClass({
  render: function() {
    return (
      <div>
        <Link href='/month'>Month View</Link>
        <h1>Im the Week View</h1>
      </div>
    );
  }
});

module.exports = Week;