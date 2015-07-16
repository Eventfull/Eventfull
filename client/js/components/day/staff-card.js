var React = require('react');
var _ = require('underscore');
var StaffGroup = require('./staff-group');

var StaffCard = React.createClass({

  // staff: object with needed and approved
  // needed: object where keys are jobs and
    // values are number of people needed
  // approved: object where keys are types of jobs
    // (kitchen, bartender) and values are arrays
    // of people filling the job.
  getDefaultProps: function(){
    return {
      staff: [],
      positions: [],
      gigId: Infinity
    };
  },

  render: function(){
    var props = this.props;

    var staff = _.map(props.positions, function(position){
      var approvedList = _.filter(props.staff, function(employee){
        return employee.Position.id === position.id;
      });

      return (
        <StaffGroup
          name={position.title}
          positionId={position.id}
          approved={approvedList}
          needed={position.statusInfo.required}
          gigId={props.gigId} />
      );
    });

    return (
      <div>
        {staff}
      </div>
    );
  }

});

module.exports = StaffCard;