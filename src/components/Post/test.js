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
import Post from './index';

/*
  Now we'll pull in a testPost from a global location
  so that we can test rendering, and update our fixtures
  from one place instead of many.
*/
import testPost from '../../constants/fixtures/testPost';

/*
  Here we would like to check that the correct markup
  is generated whenever we try to render a post.

  Here we check for the number of classNames, and the
  content of each className.
*/
test('renders correct markup', (t) => {
  /*
    Render a post, with our testPost fixture
  */
  const wrapper = shallow(<Post post={testPost} />);

  /*
    Check all our className selectors have been rendered
  */
  t.is(wrapper.find('.post').length, 1);
  t.is(wrapper.find('.postTitle').length, 1);
  t.is(wrapper.find('.postText').length, 1);
  t.is(wrapper.find('.postDate').length, 1);
  t.is(wrapper.find('.textLevel--small').length, 1);

  /*
    Now we know that they're all rendered, check they
    contain the expected data.
  */
  t.is(wrapper.find('.postTitle').text(), 'test');
  t.is(wrapper.find('.postDate').text(), '2016-08-15T22:00:00.000Z');
  t.is(wrapper.find('.textLevel--small').text(), '2016-08-15T22:00:00.000Z');
  t.is(wrapper.find('.postText').text(), 'I am testing the thing');
});
