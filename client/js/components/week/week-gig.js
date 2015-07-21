/** @jsx React.DOM */
var React = require('react');
var moment = require('moment');
var _ = require('underscore');

var WeekGig = React.createClass({
  getInitialState: function () {
    return {
      showCardDetails: false,
      staffGraphs: [<div>placeholder</div>]
    };
  },
  toggleDetails: function () {
    this.setState({ showCardDetails: !this.state.showCardDetails });
  },
  componentDidMount: function () {
    setTimeout(this.buildGraphs.bind(this), 200);
  },
  buildGraphs: function () {
    var gig = this.props.gig;
    var staffGraphs = _.map(gig.Positions, function (item, key, collection) {
      var randomFill = 100 * Math.random();
      return (
        <div><h5 style={{ display: 'inline-block', margin: '0 15px' }}>{ item.title.charAt(0) + item.title.charAt(1) }</h5><div className="bar-graph" key={ key }><div style={{ width: randomFill + '%' }}></div></div></div>
      );
    });
    this.setState({ staffGraphs });
  },
  render: function () {
    var cardDetailsDisplay = { display: this.state.showCardDetails ? 'block' : 'none' };
    var gig = this.props.gig;

    gig.startTime = moment(gig.startTime, 'HH:mm:ss').format('h:mm a');
    gig.endTime = moment(gig.endTime, 'HH:mm:ss').format('h:mm a');

    return (
      <div className="gig-card">
        <h2>{ gig.title }</h2>
        <div className="time-span">
          <h5>{ gig.startTime }<span>to</span>{ gig.endTime }</h5>
        </div>
        <div className="staff-graphs">
          { this.state.staffGraphs }
        </div>
        <div className="health" onClick={ this.toggleDetails }></div>
        <div style={ cardDetailsDisplay }>
          <h5>{ gig.type }</h5>
          <h5>{ gig.AttireId }</h5>
          <h5>{ gig.complexity }</h5>
          <h5>{ gig.health }</h5>
          <h5>{ gig.Location.addressOne }</h5>
          <h5>{ gig.Location.addressTwo }</h5>
          <h5>{ gig.Location.city }</h5>
          <h5>{ gig.Location.state }</h5>
          <h5>{ gig.Location.zipCode }</h5>
        </div>
      </div>
    );
  }
});

module.exports = WeekGig;
