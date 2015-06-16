var React = require('react');
var Staff = require('./staff-card');

var Gig = React.createClass({

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
        <GigInformation info={this.props.information} />
        <Staff staff={this.props.staff} />
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

module.exports = Gig;