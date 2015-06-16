var React = require('react');
var ViewActionCreator = require('../../actions/view-action-creator');
var _ = require('underscore');

var AddEvent = React.createClass({
  getInitialState: function () {
    return { value : null };
  },
  addEvent: function (element) {
    element.preventDefault();
    var event = _.mapObject(this.refs, function (constructor) {
      if (React.findDOMNode(constructor).value.trim() === "") {
        return null;
      }
      return _.escape(React.findDOMNode(constructor).value.trim());
    });
    ViewActionCreator.addEvent(event);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.addEvent}>
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text" placeholder="event title" ref="title"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input type="text" placeholder="event date" ref="date"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6">
              <input type="text" placeholder="start time" ref="startTime"></input>
            </div>
            <div className="col-xs-6">
              <input type="text" placeholder="end time" ref="endTime"></input>
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
            <div className="col-xs-4">
              <input type="text" placeholder="city" ref="city"></input>
            </div>
            <div className="col-xs-4">
              <input type="text" placeholder="state" ref="state"></input>
            </div>
            <div className="col-xs-4">
              <input type="text" placeholder="zip" ref="zip"></input>
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