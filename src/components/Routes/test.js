/*
  ava is a test framework, here we pull it's
  default import, which has the main API
  attached.
*/
import test from 'ava';

/*
  We need React whenever we want to compile some
  JSX, which we do here.
*/
import React from 'react';

/*
  This is the shallow renderer from airbnb/enzyme.
  It allows us to render a specific component, and
  focusses our tests to a very specific level, as
  it won't fully render child components.

  This also supposedly, makes it pretty fast.
*/
import { shallow } from 'enzyme';

/*
  Finally a local import, this is the file/component
  we would like to test
*/
import Routes from './index';

/*
  ava uses a similar-ish API to tape/node-tap,
  with a few subtle changes in the assertion specs.

  test(testName, callback).
  callback contains an argument that is used to
  perform assertions, and we use the "test" global
  function to group related tests.
*/
test('renders correct number of routes', (t) => {
  /*
    We use shallow rendering, instead of mounting
    for test performance, and the fact that we can
    test anything we care about with the shallow()
    render and API
  */
  const wrapper = shallow(<Routes />);

  /*
    The .find() API kind of similar to the jQuery
    $ selector API. In this case, because capital
    letters denote a React component, we are looking
    for the "Route" component from react-router,
    once our main "Routes" component has rendered.
  */
  const routeList = wrapper.find('Route');

  /*
    We currently only have one Route defined, the
    main one that lives at 'http://appUrl/'.
  */
  t.is(routeList.length, 1);
});

/*
  We should only have one IndexRoute.
  An IndexRoute is one that we render by default
  and it allows us to use react-router specific
  APIs so that we know when the main page is active
  which will come in helpful when we want to do
  some navigation
*/
test('only renders a single IndexRoute', (t) => {
  /*
    We use shallow rendering, instead of mounting
    for test performance, and the fact that we can
    test anything we care about with the shallow()
    render and API
  */
  const wrapper = shallow(<Routes />);

  /*
    The .find() API kind of similar to the jQuery
    $ selector API. In this case, because capital
    letters denote a React component, we are looking
    for the "IndexRoute" component from react-router,
    once our main "Routes" component has rendered.
  */
  const indexRoute = wrapper.find('IndexRoute');

  /*
    We should only have one IndexRoute defined
  */
  t.is(indexRoute.length, 1);
});
