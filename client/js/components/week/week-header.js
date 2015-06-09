/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var WeekHeader = React.createClass({
  render: function(){
    return (
      <div>
        <h5>Week Header</h5>
        <Link href='/month'>Month View</Link>
      </div>
    );
  }
});

module.exports = WeekHeader;