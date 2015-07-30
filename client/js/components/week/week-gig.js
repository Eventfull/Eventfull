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
      graphDetails: {
        spentPercent: 0,
        spentColor: 5,
        scheduledPercent: 0,
        scheduledColor: 5
      },
      scheduled: {
        current: Math.floor(randomScheduled * Math.random()),
        total: randomScheduled
      },
      spent: {
        current: Math.floor(randomSpent * Math.random()),
        total: randomSpent
      }
    };
  },

  toggleDetails: function () {
    this.setState({ showCardDetails: !this.state.showCardDetails });
  },

  componentDidMount: function () {
    // Load the graphs after the initial page render to improve performance.
    setTimeout(this.buildGraphs, 100);
  },

  buildGraphs: function () {
    var scheduledPercent = 100 * (this.state.scheduled.current / this.state.scheduled.total);
    var scheduledColor = Math.floor((scheduledPercent / 100) * 4);
    var spentPercent = 100 * (this.state.spent.current / this.state.spent.total);
    var spentColor = Math.floor((spentPercent / 100) * 4);

    this.setState({ graphDetails: {
      scheduledPercent: scheduledPercent,
      scheduledColor: scheduledColor,
      spentPercent: spentPercent,
      spentColor: spentColor
    }});
  },

  render: function () {
    // colorMaps include #A8E5A7 = green, #6BCFFF = blue, #F98F46 = orange, #F26350 = red as the primary colors for health status.
    // The fifth color is the default color utilized prior to the graphs loading.
    var scheduledColorMap = ['#F26350', '#F98F46', '#6BCFFF', '#A8E5A7', '#7198C5'];
    var spentColorMap = ['#A8E5A7', '#6BCFFF', '#F98F46', '#F26350', '#7198C5'];

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
          <div>
            <h5 style={{ display: 'block', margin: '0 15px' }}>
              { this.state.scheduled.current }
              <span className="tiny">of</span>
              { this.state.scheduled.total }
              <span className="tiny">scheduled</span>
            </h5>
            <div className="bar-graph">
              <div style={{
                width: this.state.graphDetails.scheduledPercent + '%',
                backgroundColor: scheduledColorMap[this.state.graphDetails.scheduledColor]
              }}>
              </div>
            </div>
          </div>
          <div>
            <div className="bar-graph">
              <div style={{
                width: this.state.graphDetails.spentPercent + '%',
                backgroundColor: spentColorMap[this.state.graphDetails.spentColor]
              }}>
              </div>
            </div>
            <h5 style={{ display: 'block', margin: '0 15px' }}>
              ${ this.state.spent.current }
              <span className="tiny">of</span>
              ${ this.state.spent.total }
              <span className="tiny">spent</span>
            </h5>
          </div>
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
