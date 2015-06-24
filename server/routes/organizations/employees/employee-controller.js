var employeeController = {

  getEmployees: function(req, res){
    // returns organizations employees
    // accepts params (on req.params) to filter on availability.
    res.send('returning ' + req.organization_id + ' organizations employees');
  },

  addEmployee: function(req, res){
    // add employee to organization
    res.send('adding employee for the organization ' + req.organization_id);
  },

  getEmployeeInfo: function(req, res){
    // get employee info
    res.send("getting " + req.params.employee_id +"'s info for the organization " + req.organization_id);
  },

  updateEmployeeInfo:function(req, res){
    // update employee info. will be available on data
    res.send("updating " + req.params.employee_id +"'s info for the organization " + req.organization_id);
  },

  removeEmployeeFromOrganization: function(req, res){
    // remove employee from organization
    res.send("deleting " + req.params.employee_id +"'s info for the organization " + req.organization_id);
  }

};
module.exports = employeeController;