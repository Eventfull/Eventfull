var React = require('react');
var Link = require('react-router-component').Link;

var Sidebar = React.createClass({
  render: function () {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <div className="logo-offset">
          <img src="./style/EventfullLogo@2x.png" width="160px" alt="Eventfull" />
        </div>
        <ul className="nav nav-sidebar">
          <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
          <li><Link href='/day'>Day View</Link></li>
          <li><Link href='/week'>Week View</Link></li>
          <li><Link href='/month'>Month View</Link></li>
          <li><a href="#">Event health</a></li>
          <li><a href="#">List employees</a></li>
          <li><a href="#">Approval flow</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;