/** @jsx React.DOM */
var React = require('react');

var MonthHeader = React.createClass({
  render:function() {
    return (
      <div>
        <Link href='/week'>Week View</Link>
        <h3>Im the Month Header</h3>
      </div>
    );
  }
});

module.exports = MonthHeader;