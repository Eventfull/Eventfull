var React = require('react');
var EmployeeStore = require('../../stores/employee-store');
var ViewActionCreator = require('../../actions/view-action-creator');
var Employee = require('./employee');

var StaffAvailableBin = React.createClass({

  getInitialState: function(){
    return {
      staff: EmployeeStore.getAvailableEmployees()
    }
  },

  componentWillMount: function(){
    EmployeeStore.addChangeListener(this._handleEmployeeStoreUpdate);
  },

  componentWillUnmount: function(){
    EmployeeStore.removeChangeListener(this._handleEmployeeStoreUpdate);
  },

  _handleEmployeeStoreUpdate: function(){
    this.setState({
      staff: EmployeeStore.getAvailableEmployees()
    })
  },

  render: function(){
    var staff = this.state.staff.map(function(emp){
      return (
        <Employee name={emp.name} employeeId={emp.id}/>
      );
    });

    return (
      <div>
        {staff}
      </div>
    );
  }
});

module.exports = StaffAvailableBin;
