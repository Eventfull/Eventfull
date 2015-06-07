/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var MonthHeader = React.createClass({
  render:function() {
    return (
        <div className="row">
          <div className="col-md-12">
            <h3 className="leftHeader">Event List</h3>
            <h4 className="centerHeader">June</h4>
            <Link className="Link" href='/week'>Week View</Link>
          </div>
        </div>
    );
  }
});

module.exports = MonthHeader;