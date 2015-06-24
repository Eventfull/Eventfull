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
      staff: {
        needed: {},
        approved: {}
      },
      gigID: Infinity
    };
  },

  render: function(){
    var props = this.props;
    var staff = _.map(props.staff.needed, function(amountNeeded, groupName){
      var approvedList = props.staff.approved[groupName]; // array of approved employees
      return (
        <StaffGroup
          name={groupName}
          approved={approvedList}
          needed={amountNeeded}
          gigID={props.gigID} />
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