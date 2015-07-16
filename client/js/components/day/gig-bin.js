var React = require('react');
var StaffCard = require('./staff-card');

var GigBin = React.createClass({

  // information: object full of gig info (like location)
  // staff: object with information about the staffing needs
    // and the approved employees.
  getDefaultProps: function(){
    return {
      information: {},
      staff: [],
      positions: []
    };
  },

  render: function(){
    return (
      <div>
        <GigInformation information={this.props.information} />
        <StaffCard staff={this.props.staff} positions={this.props.positions} gigId={this.props.information.id}/>
      </div>
    );
  }

});

var GigInformation = React.createClass({

  getDefaultProps: function(){
    return {
      information: {
        location: {}
      }
    };
  },

  render: function(){
    var information = this.props.information;

    return (
      <div>
        <br />Title: {information.title}
        <br />Location: {information.Location.name}
        <br />Type: {information.type}
        <br />StartTime: {information.startTime}
        <br />EndTime: {information.endTime}
      </div>
    );
  }

});

module.exports = GigBin;