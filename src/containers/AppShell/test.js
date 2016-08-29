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

  This also makes it pretty fast.
*/
import { shallow } from 'enzyme';

/*
  Finally a local import, this is the file/component
  we would like to test
*/
import AppShell from './index';

/*
  Here we try to render the AppShell with a single
  h1 tag, which should pass our PropTypes validation
  as it's a valid React element.
*/
test('renders correct markup', (t) => {
  const wrapper = shallow(
    <AppShell>
      <h1>Hello World</h1>
    </AppShell>
  );

  /*
    Let's make sure that the className has appeared
    on the wrapping div.
  */
  t.is(wrapper.find('.appShell').length, 1);

  /*
    Now let's make sure that our AppShell wrapper
    contains the expected child component.
  */
  t.true(wrapper.contains(<h1>Hello World</h1>));
});
