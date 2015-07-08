/** @jsx React.DOM */
var React = require('react');
var _ = require('underscore');

var MonthDayPreview = React.createClass({
  getInitialState: function () {
    return { showCardDetails: false };
  },
  toggleDetails: function () {
    this.setState({ showCardDetails: !this.state.showCardDetails });
  },
  render: function () {
    var cardDetailsDisplay = { display: this.state.showCardDetails ? 'block' : 'none' };
    return (
      <div className="event-card col-md-4" onClick={ this.toggleDetails }>
        <h2>Fundraising Gala</h2>
        <h5>10:00 AM</h5>
        <h5>to</h5>
        <h5>4:00 PM</h5>
        <div className="health">healthy :)</div>
        <div className="event-card-details" style={ cardDetailsDisplay }>
          <h5>984 Market St.</h5>
          <h5>San Francisco</h5>
          <h5>CA</h5>
          <h5>98425</h5>
        </div>
      </div>
    );
  }
});

module.exports = MonthDayPreview;
