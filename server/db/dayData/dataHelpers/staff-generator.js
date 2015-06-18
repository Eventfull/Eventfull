var randomItemFromArray = require('./helper').randomItemFromArray;
var employeeCreator = require('./employee-creator');

// returns staff object with
// lots of random employee objects
function generateStaff(){
  var staff = {
    approved: {},
    needed: {}
  };

  return buildStaff( calculateStaffNeeded(staff, GROUPS) );
}

// creates random needs for staff groups
function calculateStaffNeeded(staff, groups){
  for (var group in groups){
    staff.needed[group] = Math.ceil(Math.random()*10);
  }

  return staff;
}

// Builds staff up. Takes all needed groups, and
// selects from that list for the group.
function buildStaff(staff){
  var numberOfStaff = Math.ceil(Math.random()*15);
  for (var i = 0; i < numberOfStaff; i++){
    var employee = employeeCreator.create();
    var group = randomEmployeeGroup(Object.keys(staff.needed));
    staff = addEmployeeToStaff(staff, employee, group);
  }
  return staff;
}

// adds the employee to the correct employee group
// if there is still room in the group.
function addEmployeeToStaff(staff, employee, group){
  if (groupHasAvailableSpots(staff, group)){
    staff.approved[group] = (staff.approved[group] || []);
    staff.approved[group].push(employee);
  }
  return staff;
}

// 3 cases:
//  1. if nobody has been added, there are available spots
//  2. if there still aren't enough people, there are available false
//  3. return false otherwise
function groupHasAvailableSpots(staff, group){
  if (staff.approved[group] === undefined) return true;
  if (staff.approved[group].length < staff.needed[group]) return true;
  return false;
}


function randomEmployeeGroup(group){
  return randomItemFromArray(group);
}

var GROUPS = {
  'kitchen-staff': 'kitchen-staff',
  'server': 'server',
  'bartender': 'bartender',
  'coat-check': 'coat-check',
  'drop-station': 'drop-station',
  'captain': 'captain',
  'kitchen-manager': 'kitchen-manager',
  'bar-back': 'bar-back',
  'bar-captain': 'bar-captain',
  'driver': 'driver',
};

// generates array of employees - used for
// creating a group of pending employees
function generatePending(num){
  var array = [];
  num = num || Math.floor(Math.random()*15);

  for (var i = 0; i < num; i++){
    array.push(employeeCreator.create());
  }
  return array;
}


module.exports = {
  generateStaff: generateStaff,
  generatePending: generatePending
};