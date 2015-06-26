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

  // connectDragSource added to props by DragSource
  render: function(){
    var ratings = ["#F26350", "#F26350", "#6BCFFF", "#6BCFFF", "#6BCFFF", "#A8E5A7"];
    var ratingColor = ratings[this.props.rating] || ratings[0];
    var styles = {
      backgroundColor: ratingColor,
      borderColor: ratingColor,
    };
    return this.props.connectDragSource(
      <div className="employee">
        <h4>{this.props.name}</h4>
        <div className="employee-rating" style={styles}></div>
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
  },

  canDrag: function (props) {
    // You can disallow drag based on props
    // for now we will just return true.
    return true;
  }

};

var collect = function(connect, monitor){
  return {connectDragSource: connect.dragSource()};
};

module.exports = DragSource(type, spec, collect)(Employee);