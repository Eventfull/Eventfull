/** @jsx React.DOM */
var React = require('react');

var MonthSidebar = React.createClass({
  render:function() {
    return (
      <div className="col-md-4">
        <h3>Action Sidebar</h3>
        <button type="button">Inspect Day</button>
      </div>
    );
  }
});

module.exports = MonthSidebar;