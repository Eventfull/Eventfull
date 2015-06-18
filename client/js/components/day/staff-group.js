var React = require('react');
var _ = require('underscore');
var Employee = require('./employee');

var StaffGroup = React.createClass({

  // approved: array of employees approved for the job
  // needed: number of employees needed
  // name: group name
  getDefaultProps: function(){
    return {
      approved: [],
      needed: '',
      name: ''
    };
  },

  render: function(){
    var approved = _.map(this.props.approved, function(human, idx){
      return <Employee rating={human.rating} name={human.name} key={idx} />
    });

    var numApproved = this.props.approved.length;
    var needed = this.props.needed;
    var name = this.props.name;

    return (
      <div>
        Group Name: {name}<br />
        Health: {(numApproved / needed) || 0}
        {approved}
      </div>
      );
  }

});

module.exports = StaffGroup;