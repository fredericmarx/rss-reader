/*
  This file is a container page that can
  care about data fetching to get the feeds,
  and can pass the state changes down to
  the appropriate component as properties,
  which helps force the separation between
  containers and components.

  Containers should care about state,
  Components should care about properties.
*/

/*
  We're using JSX, so we need the main React
  import in our component, despite it not
  being explicitly called.

  Component is a class that React defines
  with a lot of so called "lifecycle" methods.
  This import allows us to take advantage of
  them. We only use the "render" method so far,
  but rest assured we'll make use of some of
  these extended lifecycle methods, for things
  like fetching data before we mount components,
  controlling whether a component should update
  based on new props or state, and other fancy
  things that really show why I enjoy using
  React.
*/
import React, { Component } from 'react';

/*
  Let's import the PostList stateless component,
  so that we can render it with some feeds.

  The PostList component doesn't care about any
  global state, or data fetching, or modifying
  anything, however the PostListPage component
  will be the central source of all the data
  the PostList component needs to render.
*/
import PostList from '../../components/PostList';

/*
  Using the same test feeds as the tests use is
  not ideal, once we have data fetching and the
  feed data structure is more clearly defined,
  we can start fetching and storing feeds, and
  get rid of this fixture import.
*/
import testFeeds from '../../constants/fixtures/testFeeds';

/*
  We declare PostListPage as a class, rather than
  as an arrow function because in the future
  we want to extend the PostListPage component
  using Component specific APIs. This includes
  modifying the global state.

  This is why we call the components declared
  as arrow functions (or non-arrow functions,
  just declared as a function that returns JSX,
  or creates a virtual DOM using something else,
  like React.createElement() for example),
  "state-less".

  It's because the goal of the function
  declaration style is to not allow you to
  modify global state from your component, so
  you are unable to change the component's looks
  or behaviour when it mounts or unmounts for
  example, you should get the same result
  regardless of what the values held in global
  state. Also when you render each component,
  it should only focus on rendering props, no
  state.

  However, PostListPage is a "state-full" class
  declaration.

  This isn't something to do lightly, and if
  I can get away with it, I'll always prefer
  stateless functions. However, AppShell will
  be responsible for fetching user data, such
  as displaying the name or email address of
  the user in the nav bar, and dispatching
  actions that can change the user's state,
  such as logging out.
*/
class PostListPage extends Component {

  /*
    Here we create a render method, that React
    knows to call when we ask to mount the
    AppShell component, React returns the
    return value of this function.
  */
  render () {
    /*
      Here we're super lazy and don't even pull
      the testFeeds into component state, we have
      them defined at the global file level, and
      accessible within our component as a variable
      name.
    */
    return (
      <PostList feeds={testFeeds} />
    );
  }
}

/*
  Let's export it so that we can render it!
*/
export default PostListPage;
