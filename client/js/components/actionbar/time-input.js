var React = require('react');
var MaskedInput = require('react-maskedinput');

var TimeInput = React.createClass({
  logger: function () {},
  render: function () {
    return (
      <MaskedInput
        pattern="11:11 zm"
        placeholder={ this.props.placeholder }
        onClick={ this.props.handleTimeClick }
        onChange={ this.logger }
        formatCharacters={{
          'z': {
            validate: function(char) { return /[ap]/.test(char) },
            transform: function(char) { return char.toLowerCase() }
          },
          'm': {
            validate: function(char) { return /[m]/.test(char) },
            transform: function(char) { return char.toLowerCase() }
          }
        }}
      />
    );
  }
});

module.exports = TimeInput;