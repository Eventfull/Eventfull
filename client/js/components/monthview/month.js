var React = require('react');

Link = require('react-router-component').Link;

var Month = React.createClass({
  render: function() {
    return (
      <div>
        <Link href='/week'>Week View</Link>
        <h1>Im the Month View</h1>
      </div>
    );
  }
});

module.exports = Month;