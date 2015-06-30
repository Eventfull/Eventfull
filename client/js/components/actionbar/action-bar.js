var React = require('react');
var Link = require('react-router-component').Link;
var classnames = require('classnames');
var AddEvent = require('./add-event');
var AddEmployee = require('./add-employee');
var AllActions = require('./all-actions');


var Actionbar = React.createClass({
  render: function () {

    var Action;
    switch (this.props.hashRoute) {
      case '#actionbar/add-event': Action = AddEvent; break;
      case '#actionbar/add-employee': Action = AddEmployee; break;
      default: Action = AllActions;
    }

    var classes = classnames({
      'action-bar-default': true,
      'action-bar-open': this.props.actionbarOpen
    });

    return (
      <div className={classes} id="action-bar">
        <Link href={window.location.pathname} className="x-close">x</Link>
        <Action></Action>
      </div>
    );
  }
});

module.exports = Actionbar;