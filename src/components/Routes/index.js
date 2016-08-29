/*
  This file is where we start to come together
  and bring in all our containers/components
  that come together to make up "pages", or
  "views" in our app. We can nest these Routes
  somewhat arbitrarily, though I don't think
  we'll have too much nesting in the beginning.
*/

/*
  We're using JSX, so we need the main React
  import in our component, despite it not
  being explicitly called.
*/
import React from 'react';

/*
  Router: Main react-router export, the root
        component on which the rest of the
        react-router specific components have
        context for, and can nest under.

  IndexRoute: When we define Routes, we set
        a path and a component, and react-router
        figures out what component(s) it needs
        to render based on the path prop. If the
        path prop is '/', whenever the route starts
        with a '/' character (a.k.a. all routes),
        then the "active" property that allows us
        to change the styling of active links in
        navigation and so on, would always match
        on '/', the IndexRoute gives us some special
        internal-to-react-router code, that allows
        us to use '/' as the main route, and have
        links back to that route be active in the
        way we expect.

  Route: This component takes two props, (that
        we care about), path and component.

        Short version: When user navigates to
        {path}, render {component}.

  browserHistory: This is a history library,
        which allows us to route without hashes
        etc in our app. Going to appurl/post/{id}
        etc, will look like a real URL, despite
        all the routing being handled client side.
*/

import { Router, IndexRoute, Route, browserHistory } from 'react-router';

/*
  This is the "shell" of the app, where we have
  global UI/nav elements and state and so on.
*/
import AppShell from '../../containers/AppShell';

/*
  This is the default view of the app, a list
  of all posts, and will render the PostList
  component, which will render a set of Post
  components
 */
import PostListPage from '../../containers/PostListPage';

/*
  I try and make as many components as possible
  these so-called "stateless" functions, where
  the function returns some JSX which is only
  affected by props that are passed in, instead
  of global state. This means React can do some
  internal magic, I think, and you get some
  performance gains because of it. You also can
  rely on the same output, regardless of input.
  Something, something, functional programming
  is great. ¯\_(ツ)_/¯
*/
const Routes = () => (
  /*
    This is a JSX-y way of configuring how routes
    work in the app. The nesting allows us to
    render either multiple sections of a path,
    e.g. /posts/{postId} could be configured
    as follows:

      <Route path='/' component={NavMenu}>
        <IndexRoute component={Posts}>
          <Route
            path='posts/:postId'
            component={Post}
          />
        </IndexRoute>
      </Route>

    Which would render all three components, at
    the constructed path /posts/:postId
  */
  <Router history={browserHistory}>
    <Route path='/' component={AppShell}>
      <IndexRoute component={PostListPage} />
    </Route>
  </Router>

  /*
    There is an alternative, non-JSX, way of
    route configuration, which, for our previous
    example, would look a little like:

    const routes = {
      path: '/',
      component: AppShell,
      indexRoute: { component: Posts },
      childRoutes: [
        { path: 'posts/:postId', component: Post }
      ]
    }

    Which you then export for render inside
    a router JSX tag, i.e.

    <Router routes={routes} />

    However, I feel like the JSX syntax lends
    itself well to nested component rendering,
    and people's understanding of it.
  */
);

/*
  Export the Routes function so we can use
  it elsewhere \o/
*/
export default Routes;
