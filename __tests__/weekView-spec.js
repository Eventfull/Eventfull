/*
Jest globally injects variables including afterEach, beforeEach, describe, it, xdescribe, xit, etc. Additionally, the jest object is available globally with its own set of methods, including jest.dontMock. Therefore, it is not necessary to require dependencies into testing spec files.
*/

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
