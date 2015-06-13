/** @jsx React.DOM */
var React = require('react');

var Template = React.createClass({
  render: function () {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Template;
