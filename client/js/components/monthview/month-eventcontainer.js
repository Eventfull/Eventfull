/** @jsx React.DOM */
var React = require('react');
var Event = require('./month-event.js');

var MonthEventContainer = React.createClass({
  render:function() {
    return (
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li><Event /></li>
              <li><Event /></li>
              <li><Event /></li>
              <li><Event /></li>
              <li><Event /></li>
            </ul>
          </div>
        </div>
    );
  }
});

module.exports = MonthEventContainer;