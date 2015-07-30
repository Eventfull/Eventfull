/** @jsx React.DOM */
var React = require('react');
var moment = require('moment');
var _ = require('underscore');

var WeekGig = React.createClass({
  getInitialState: function () {
    var randomSpent = Math.floor(700 * Math.random());
    var randomScheduled = Math.floor(70 * Math.random());
    return {
      showCardDetails: false,
      staffGraphs: [<div>placeholder</div>],
      spent: {
        spent: Math.floor(randomSpent * Math.random()),
        total: randomSpent
      },
      scheduled: {
        scheduled: Math.floor(randomScheduled * Math.random()),
        required: randomScheduled
      },
    };
  },

  toggleDetails: function () {
    this.setState({ showCardDetails: !this.state.showCardDetails });
  },

  componentDidMount: function () {
    setTimeout(this.buildGraphs.bind(this), 200);
  },

  buildGraphs: function () {
    var spentPercent = 100 * (this.state.spent.spent / this.state.spent.total);
    var spentColor = Math.floor((spentPercent / 100) * 4);
    var schedulePercent = 100 * (this.state.scheduled.scheduled / this.state.scheduled.required);
    var scheduleColor = Math.floor((schedulePercent / 100) * 4);

    var colorMap = ['#F26350', '#F98F46', '#6BCFFF', '#A8E5A7'];
    var gameGraphs = [];

    gameGraphs.push(
      <div>
        <h5 style={{ display: 'block', margin: '0 15px' }}>
          ${ this.state.spent.spent }
          <span className="tiny">of</span>
          ${ this.state.spent.total }
          <span className="tiny">spent</span>
        </h5>
        <div className="bar-graph">
          <div style={{ width: spentPercent + '%', backgroundColor: colorMap[spentColor] }}></div>
        </div>
      </div>
    );
    gameGraphs.push(
      <div>
        <div className="bar-graph">
          <div style={{ width: schedulePercent + '%', backgroundColor: colorMap[scheduleColor] }}></div>
        </div>
        <h5 style={{ display: 'block', margin: '0 15px' }}>
          { this.state.scheduled.scheduled }
          <span className="tiny">of</span>
          { this.state.scheduled.required }
          <span className="tiny">scheduled</span>
        </h5>
      </div>
    );

    this.setState({ staffGraphs: gameGraphs });

  },

  render: function () {
    console.log("this.state:", this.state);
    var cardDetailsDisplay = { display: this.state.showCardDetails ? 'block' : 'none' };
    var gigCardHeight = { height: this.state.showCardDetails ? '400px' : '140px' };
    var gig = this.props.gig;

    gig.startTime = moment(gig.startTime, 'HH:mm:ss').format('h:mm a');
    gig.endTime = moment(gig.endTime, 'HH:mm:ss').format('h:mm a');

    return (
      <div className="gig-card" onClick={ this.toggleDetails } style={ gigCardHeight }>
        <h2>{ gig.title }</h2>
        <div className="time-span">
          <h5>{ gig.startTime }<span className="tiny">to</span>{ gig.endTime }</h5>
        </div>
        <div className="staff-graphs">
          { this.state.staffGraphs }
        </div>
        <div style={ cardDetailsDisplay } className="card-details">
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
