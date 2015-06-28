var React = require('react');

var AddEmployee = React.createClass({
  render: function () {
    // This form is a placeholder to demonstrate multiple actions are possible per route on the actionbar
    return (
      <div>
        <h2>Add Employee</h2>
        <form>
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text" placeholder="employee name" ref="title"></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = AddEmployee;