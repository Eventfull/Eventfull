/** @jsx React.DOM */
var React = require('react');

  
  var Template = React.createClass({
    render: function() {
      return (
        <div className = "container">
          <h1>Hi im the Template!</h1>
          {this.props.children}
        </div>
      );
    }
  });

  module.exports = Template;
