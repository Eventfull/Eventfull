var React = require('react');
var _ = require('underscore');

var AllActions = React.createClass({
  render: function () {
    return (
      <div>
        <h2>All Actions</h2>
        <ul className="nav">
          <li><a href="#actionbar/add-event">Add Event</a></li>
          <li><a href="#actionbar/add-employee">Add Employee</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = AllActions;