var React = require('react');
var _ = require('underscore');
var DropTarget = require('react-dnd').DropTarget;
var Employee = require('./employee');
var EmployeeStore = require('../../stores/employee-store');

var StaffGroup = React.createClass({

  // approved: array of employees approved for the job
  // needed: number of employees needed
  // name: group name
  getDefaultProps: function(){
    return {
      approved: [],
      needed: Infinity,
      name: '',
      gigId: Infinity
    };
  },

  render: function(){
    var props = this.props;
    var health = props.approved.length / props.needed;

    var approved = _.map(props.approved, function(employee, idx){
      var data = EmployeeStore.getEmployee(employee.id);
      EmployeeStore.addToUnavailableEmployees(employee.id);

      return <Employee
              name={data.name}
              key={idx}
              gigId={props.gigId}
              employeeId={data.id}
              positionId={props.positionId}
              group={props.name} />
    });

    approved = props.connectDropTarget(
      <div>
        {approved}
        <div className="employee-open-zone">
          <h6>open spots ({props.needed - approved.length})</h6>
        </div>
      </div>
    );

    return (
      <div className="employee-group">
        <h6>~~ {props.name} ~~</h6>
        {approved}
      </div>
    );
  }

});

// see documentation: http://gaearon.github.io/react-dnd/docs-drop-target.html
var type = 'employee';

var spec = {
  drop: function(props, monitor, component){
    return {group: props.name, gigId: props.gigId, positionId: props.positionId};
  }
};

var collect = function(connect, monitor){
  return { connectDropTarget: connect.dropTarget() }
}

module.exports = DropTarget(type, spec, collect)(StaffGroup);