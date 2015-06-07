/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var Week = React.createClass({
  render: function() {
    return (
      <div>
        <Link href='/month'>Month View</Link>
      </div>
    );
  }
});

module.exports = Week;