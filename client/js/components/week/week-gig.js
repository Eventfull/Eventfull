/** @jsx React.DOM */
var React = require('react');
var _ = require('underscore');

var WeekGig = React.createClass({
  getInitialState: function () {
    return { showCardDetails: false };
  },
  toggleDetails: function () {
    this.setState({ showCardDetails: !this.state.showCardDetails });
  },
  render: function () {
    var cardDetailsDisplay = { display: this.state.showCardDetails ? 'block' : 'none' };
    var gig = this.props.gig;

    return (
      <div className="event-card">
        <h2>{ gig.title }</h2>
        <h5>{ gig.startTime }</h5>
        <h5>to</h5>
        <h5>{ gig.endTime }</h5>
        <div className="health" onClick={ this.toggleDetails }></div>
        <div className="event-card-details" style={ cardDetailsDisplay }>
          <h5>{ gig.type }</h5>
          <h5>{ gig.AttireId }</h5>
          <h5>{ gig.LocationId }</h5>
          <h5>{ gig.complexity }</h5>
          <h5>{ gig.health }</h5>
          <h5>{ gig.location.addressOne }</h5>
          <h5>{ gig.location.addressTwo }</h5>
          <h5>{ gig.location.city }</h5>
          <h5>{ gig.location.state }</h5>
          <h5>{ gig.location.zipCode }</h5>
        </div>
      </div>
    );
  }
});

module.exports = WeekGig;