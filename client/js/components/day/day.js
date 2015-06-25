var React = require('react');
var DayStore = require('../../stores/day-store');
var ViewActionCreator = require('../../actions/view-action-creator');
var DayHeader = require('./day-header');
var GigBin = require('./gig-bin');

var Day = React.createClass({

  getInitialState: function(){
    // date: Date object
    // gigs: array full of objects representing gigs
    // pending: array full of objects representing employees
    return {
      date: '',
      gigs: [],
      pending: []
    };
  },

  componentWillMount: function(){
    DayStore.addChangeListener(this._handleUpdate);
     // trigger API call to get initial data.
    ViewActionCreator.getDayData();
  },

  componentWillUnmount: function(){
    DayStore.removeChangeListener(this._handleUpdate);
  },

  _handleUpdate: function(){
    this.setState(DayStore.getData());
  },

  render: function(){
    var gigs = this.state.gigs.map(function(gig, idx){
      return (
        <div className='bin day-bin'>
          <GigBin
            information={gig.information}
            staff={gig.staff}
            key={idx} />
        </div>
      );
    });

    return (
      <div>
        <DayHeader day={ this.state.date } />
        <div className="canvas">
          {gigs}
        </div>
      </div>
    );
  }

});

module.exports = Day;

