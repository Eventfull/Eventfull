/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var MonthHeader = React.createClass({
  render:function() {
    return (
        <div className="row">
          <div className="col-md-12">
            <h3>June</h3>
            <Link href='/week'>Week View</Link>
          </div>
        </div>
    );
  }
});

module.exports = MonthHeader;