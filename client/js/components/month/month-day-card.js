/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var MonthDayCard = React.createClass({
  render:function () {
    var currentDate = this.props.dayData.date;
    var dayPath = '/day/' + currentDate;

    var eventCircles = [];
    for(var i=0; i<this.props.dayData.numEvents; i++) {
      //temporary way to make different colored circles
      var status = Math.floor(Math.random() *5) +1;
      if( status  <= 3 ) {
        eventCircles.push(<div className= "events-circle-green"></div>);
      } else if ( status === 4 ) {
        eventCircles.push(<div className= "events-circle-blue"></div>);
      } else {
        eventCircles.push(<div className= "events-circle-red"></div>);
      }
    }
    return (
      <div className="event-card month-event-card">
        <Link className="month-events-number" href={dayPath}>{ this.props.dayData.weekNumber * 7 + this.props.dayData.dayNumber }</Link>
        <div className="events-circle-list">{ eventCircles }</div>
      </div>
    );
  }
});

module.exports = MonthDayCard;