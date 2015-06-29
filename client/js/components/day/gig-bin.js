var React = require('react');
var StaffCard = require('./staff-card');

var GigBin = React.createClass({

  // information: object full of gig info (like location)
  // staff: object with information about the staffing needs
    // and the approved employees.
  getDefaultProps: function(){
    return {
      information: {},
      staff: {}
    };
  },

  render: function(){
    return (
      <div>
        <StaffCard staff={this.props.staff} gigID={this.props.information.gigID}/>
      </div>
    );
  }

});

var GigInformation = React.createClass({

  getDefaultProps: function(){
    return {
      info: {}
    };
  },

  render: function(){
    var info = this.props.info;

    return (
      <div>
        <br />location: {info.location}
        <br />time: {info.time}
        <br />attire: {info.attire}
        <br />type: {info.type}
      </div>
    );
  }

});

module.exports = GigBin;