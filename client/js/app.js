var React = require('react');

var App = React.createClass({
  render: function(){
    return (
      <div>
      Check this out!
      </div>
    );
  }
})

React.render(<App/>, document.getElementById('content'));