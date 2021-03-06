var React = require('react');
var DayStore = require('../../stores/day-store');
var EmployeeStore = require('../../stores/employee-store');
var ViewActionCreator = require('../../actions/view-action-creator');
var DayHeader = require('./day-header');
var GigBin = require('./gig-bin');
var StaffAvailableBin = require('./staff-available-bin');
var _ = require('underscore');
var moment = require('moment');

var Day = React.createClass({

  getInitialState: function(){
    // date: Date object
    // gigs: array full of objects representing gigs
    // pending: array full of objects representing employees
    return {
      date: '',
      gigs: {}
    };
  },

  componentWillMount: function(){
    DayStore.addChangeListener(this._handleDayStoreUpdate);
    DayStore.addDatabaseChangeListener(this._handleDatabaseUpdate);
    EmployeeStore.addChangeListener(this._handleEmployeeStoreUpdate);

    var date = this.props.date ? moment(this.props.date, 'YYYYMMDD') : moment();

    ViewActionCreator.getAvailableEmployees(date);
    ViewActionCreator.getDayData(date);
  },

  componentWillUnmount: function(){
    EmployeeStore.removeChangeListener(this._handleEmployeeStoreUpdate);
    DayStore.removeDatabaseChangeListener(this._handleDatabaseUpdate);
    DayStore.removeChangeListener(this._handleDayStoreUpdate);
  },

  _handleDayStoreUpdate: function(){
    this.setState(DayStore.getData());
  },

  _handleDatabaseUpdate: function () {
    confirm('new data, refresh?');
  },

  _handleEmployeeStoreUpdate: function(){
    this.render();
  },

  render: function(){
    var gigs = _.map(this.state.gigs, function(gig, idx){
      return (
        <div className='bin day-bin'>
          <GigBin
            information={gig}
            staff={gig.Users}
            positions={gig.Positions}
            key={idx} />
        </div>
      );
    });

    return (
      <div>
        <DayHeader date={ this.state.date } />
        <div className="canvas">
          {gigs}
        </div>
        <StaffAvailableBin />
      </div>
    );
  }

});

module.exports = Day;

