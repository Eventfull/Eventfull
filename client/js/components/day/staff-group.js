var React = require('react');
var _ = require('underscore');
var DropTarget = require('react-dnd').DropTarget;
var Employee = require('./employee');

var StaffGroup = React.createClass({

  // approved: array of employees approved for the job
  // needed: number of employees needed
  // name: group name
  getDefaultProps: function(){
    return {
      approved: [],
      needed: Infinity,
      name: '',
      gigID: Infinity
    };
  },

  render: function(){
    var props = this.props;
    var health = props.approved.length / props.needed;

    var approved = _.map(props.approved, function(employee, idx){
      return <Employee
              rating={employee.rating}
              name={employee.name}
              key={idx}
              gigID={props.gigID}
              employeeID={employee.employeeID}
              group={props.name} />
    });

    approved = props.connectDropTarget(
      <div>
        {approved}
        <div className="employee-open-zone">
          <h6>open spots ({props.needed})</h6>
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
    return {group: props.name, gigID: props.gigID};
  }
};

var collect = function(connect, monitor){
  return { connectDropTarget: connect.dropTarget() }
}

module.exports = DropTarget(type, spec, collect)(StaffGroup);