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
import PostList from './index';

/*
  These are some test RSS feeds that we can re-use
  from the main component, which is great as our feed
  data structure is in the process of being defined.

  Changing the structure in one place is easier than
  changing it in many!
*/
import testFeeds from '../../globals/fixtures/testFeeds';

/*
  ava uses a similar-ish API to tape/node-tap,
  with a few subtle changes in the assertion specs.

  test(testName, callback).
  callback contains an argument that is used to
  perform assertions, and we use the "test" global
  function to group related tests.
*/
test('renders correct markup', (t) => {
  /*
    We use shallow rendering, instead of mounting
    for test performance, and the fact that we can
    test anything we care about with the shallow()
    render and API
  */
  const wrapper = shallow(
    <PostList feeds={testFeeds} />
  );

  /*
    Our wrapper should have a single surrounding
    div with the className of 'postList'
  */
  t.is(wrapper.find('.postList').length, 1);

  /*
    Based on our testFeeds data, we know that there
    are five posts, let's check our component renders
    five Post components
  */
  t.is(wrapper.find('Post').length, 5);
});
