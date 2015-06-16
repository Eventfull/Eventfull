var React = require('react');

var Employee = React.createClass({

  getDefaultProps: function(){
    // name: name of employee as string
    // rating: rating of employee as number
    return {
      name: '',
      rating: ''
    };
  },

  render: function(){
    return (
      <div>
        Name: {this.props.name},
        Rating: {this.props.rating},
      </div>
    );
  }

});

module.exports = Employee;