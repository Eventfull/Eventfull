/** @jsx React.DOM */
var React = require('react');

var MonthSidebar = React.createClass({
  render:function() {
    return (
      <div className="col-md-4">
        <h3>Action Sidebar</h3>
        <img src="http://placehold.it/150x150"/>
        <ul>
          <li><button type="button">Inspect Day</button></li>
          <li><button type="button">Event Health</button></li>
        </ul>
      </div>
    );
  }
});

module.exports = MonthSidebar;