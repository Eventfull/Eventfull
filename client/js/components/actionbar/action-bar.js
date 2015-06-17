var React = require('react');
var AddEvent = require('./add-event');

var ActionBar = React.createClass({
  render: function () {
    return (
      <div className="action-bar-default" id="action-bar">
        <AddEvent></AddEvent>
      </div>
    );
  }
});

module.exports = ActionBar;