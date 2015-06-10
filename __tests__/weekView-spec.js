jest.dontMock('../client/js/components/week/week.js');
var WeekView = require('../client/js/components/week/week.js');

describe('Test testing', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  it('should exist', function() {
    var weekView = TestUtils.renderIntoDocument( <WeekView />);
    expect(TestUtils.isCompositeComponent(weekView)).toBeTruthy();
  });
});
  