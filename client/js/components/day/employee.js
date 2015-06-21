var React = require('react');
var DragSource = require('react-dnd').DragSource;
var ViewActionCreator = require('../../actions/view-action-creator');

var Employee = React.createClass({

  getDefaultProps: function(){
    // name: name of employee as string
    // rating: rating of employee as number
    return {
      name: '',
      rating: '',
      gigID: Infinity,
      employeeID: Infinity
    };
  },

  render: function(){
    return this.props.connectDragSource(
      <div>
        Name: {this.props.name},
        Rating: {this.props.rating},
      </div>
    );
  }

});

// see docs http://gaearon.github.io/react-dnd/docs-drag-source.html

var type = 'employee';

var spec = {

  beginDrag: function(props, monitor, component){
    // return a plain JavaScript object describing the data being dragged
    return {
      name: props.name,
      rating: props.rating,
      gigID: props.gigID,
      employeeID: props.employeeID
    };
  },

  endDrag: function(props, monitor, component){
    if (monitor.didDrop()){
       // the drop target specified a drop result by
       // returning a plain object from its drop() method,
       // it will be available as monitor.getDropResult()
      var toGig = monitor.getDropResult();
      ViewActionCreator.moveStaff({
        fromGig: props.gigID,
        fromGroup: props.group,
        toGig: toGig.gigID,
        toGroup: toGig.group,
        employeeID: props.employeeID
      });
    }
  }

  // can implement this once we have approval flow. will allow us
  // to prevent dragging of approved contractors

    // canDrag: function (props) {
    //   // You can disallow drag based on props
    //   return props.isReady;
    // },
};

var collect = function(connect, monitor){
  return {connectDragSource: connect.dragSource()};
};

module.exports = DragSource(type, spec, collect)(Employee);