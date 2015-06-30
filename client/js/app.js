/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd/modules/backends/HTML5');
var Template = require('./components/app-template.js');
var Month = require('./components/month/month.js');
var Day = require('./components/day/day.js');
var Week = require('./components/week/week.js');
var Actionbar = require('./components/actionbar/action-bar.js');
var Sidebar = require('./components/sidebar/sidebar.js');
var classnames = require('classnames');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var App = React.createClass({
  getInitialState: function () {
    return {
      actionbarOpen: false,
      hashRoute: ''
    };
  },

  componentDidMount: function () {
    window.addEventListener('hashchange', this.handleHashChange);
  },

  handleHashChange: function () {
    var newHash = window.location.hash;
    var actionbarHashActivated = /#actionbar.*/.test(newHash);
    var actionbarOpen = this.state.actionbarOpen;

    if (!actionbarHashActivated) {
      this.setState({ actionbarOpen: false });
    } else {
      this.setState({ actionbarOpen: true, hashRoute: newHash });
    }

  },

  render: function () {
    var hashRoute = this.state.hashRoute;
    var actionbarOpen = this.state.actionbarOpen;

    var classes = classnames({
      'col-md-8': actionbarOpen,
      'schedule-push-right': actionbarOpen,
      'col-md-10': !actionbarOpen,
      'col-md-offset-2': true,
      'schedule-default': true,
      'main': true
    });

    return (
      <Template>
        <Sidebar />
        <Actionbar actionbarOpen={actionbarOpen} hashRoute={hashRoute} />
        <Locations className={classes} onNavigation={this.handleHashChange} id="schedule">
          <Location path='/'            handler={Week}  />
          <Location path='/day'         handler={Day}  />
          <Location path='/week'        handler={Week}  />
          <Location path='/week/:date'  handler={Week}  />
          <Location path='/month'       handler={Month} />
          <NotFound                     handler={Week} />
        </Locations>
      </Template>
    );
  }
});

App = DragDropContext(HTML5Backend)(App);
React.render(<App/>, document.getElementById('content'));