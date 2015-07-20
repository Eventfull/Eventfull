var React = require('react');
var ViewActionCreator = require('../../actions/view-action-creator');
var moment = require('moment');
var DatePicker = require('react-date-picker');
var MaskedInput = require('react-maskedinput');
var TimeInput = require('./time-input');
var _ = require('underscore');

var AddEvent = React.createClass({
  getInitialState: function () {
    return {
      value: null,
      dateValue: '',
      viewCalendar: false
    };
  },

  addGig: function (e) {
    e.preventDefault();

    var gig = _.mapObject(this.refs, function (constructor) {
      if (React.findDOMNode(constructor).value.trim() === "") {
        return null;
      }
      return _.escape(React.findDOMNode(constructor).value.trim());
    });

    gig.date = moment(gig.date, ['ddd, MMM Do - YYYY']).format('YYYY-MM-DD');
    gig.startTime = moment(gig.startTime, ["HH:mm a"]).format("HH:mm:ss");
    gig.endTime = moment(gig.endTime, ["HH:mm a"]).format("HH:mm:ss");

    gig.locationId = '1';
    gig.attireId = '1';

    ViewActionCreator.addGig(gig);
  },

  toggleCalendar: function () {
    this.setState({ viewCalendar: !this.state.viewCalendar });
  },

  handleDateSelection: function (date) {
    this.setState({ dateValue: date });
    this.toggleCalendar();
  },

  handleTimeClick: function (a) {
    // this is here just to give the user a hint that typing an input is required.
    // starting with this as the placeholder would break the forms visual consistency.
    a.target.placeholder = "__:__ am/pm";
  },

  render: function () {
    var viewCalendar = this.state.viewCalendar ? { display: 'block' } : { display: 'none' };

    return (
      <div>
        <h2>Add Event</h2>
        <form onSubmit={ this.addGig }>
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text" placeholder="event title" ref="title"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input
                ref="date"
                type="text"
                placeholder="event date"
                value={ this.state.dateValue }
                onFocus={ this.toggleCalendar }
                readOnly>
              </input>
              <DatePicker
                onChange={ this.handleDateSelection }
                style={ viewCalendar }
                dateFormat='ddd, MMM Do - YYYY'
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6">
              <TimeInput placeholder="start time" ref="startTime" handleTimeClick={ this.handleTimeClick } />
            </div>
            <div className="col-xs-6">
              <TimeInput placeholder="end time" ref="endTime" handleTimeClick={ this.handleTimeClick } />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text" placeholder="event address" ref="addressOne"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text" placeholder="address two" ref="addressTwo"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6">
              <input type="text" placeholder="city" ref="city"></input>
            </div>
            <div className="col-xs-3">
              <input type="text" placeholder="state" ref="state"></input>
            </div>
            <div className="col-xs-3">
              <input type="text" placeholder="zip" ref="zip"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6">
              <input type="text" placeholder="type" ref="type"></input>
            </div>
            <div className="col-xs-6">
              <input type="text" placeholder="complexity" ref="complexity"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text" placeholder="attire" ref="attire"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input type="submit"></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = AddEvent;