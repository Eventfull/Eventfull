/** @jsx React.DOM */
var React = require('react');
var _ = require('underscore');

var WeekEvent = React.createClass({
  getInitialState: function () {
    return { showCardDetails: false };
  },
  toggleDetails: function () {
    this.setState({ showCardDetails: !this.state.showCardDetails });
  },
  render: function () {
    var cardDetailsDisplay = { display: this.state.showCardDetails ? 'block' : 'none' };
    return (
      <div className="event-card" onClick={ this.toggleDetails }>
        <h2>{ this.props.event.title }</h2>
        <h5>{ this.props.event.startTime }</h5>
        <h5>to</h5>
        <h5>{ this.props.event.endTime }</h5>
        <div className="health">healthy :)</div>
        <div className="event-card-details" style={ cardDetailsDisplay }>
          <h5>{ this.props.event.addressOne }</h5>
          <h5>{ this.props.event.addressTwo }</h5>
          <h5>{ this.props.event.city }</h5>
          <h5>{ this.props.event.state }</h5>
          <h5>{ this.props.event.zip }</h5>
        </div>
      </div>
    );
  }
});

module.exports = WeekEvent;