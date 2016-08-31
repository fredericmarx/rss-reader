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
import PostListPage from './index';

/*
  We want to check that our PostListPage renders
  the following component, so we need that component
  to test too.
*/
import PostList from '../../components/PostList';

/*
  When we check whether our component has rendered
  a PostList component, we need to provide a testFeeds
  prop to PostList, let's use the one from the fixtures
*/
import testFeeds from '../../constants/fixtures/testFeeds';

/*
  Now let's try to render the PostListPage.
*/
test('renders correct markup', (t) => {
  const wrapper = shallow(
    <PostListPage />
  );

  /*
    Now let's make sure that our PostListPage wrapper
    contains the expected component.
  */
  t.true(wrapper.contains(<PostList feeds={testFeeds} />));
});
