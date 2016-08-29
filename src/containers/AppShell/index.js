/*
  This file
*/

/*
  We're using JSX, so we need the main React
  import in our component, despite it not
  being explicitly called.

  This could well be the first time you're
  seeing an import of { PropTypes } from
  'react'.

  PropTypes are a check that runs whenever
  we try to render a component, and makes
  sure that we know what we're trying to
  render. For example, we're not passing
  an array of post objects to the Post
  component. Once the feed format is more
  stable, I'll move out the PropTypes imports
  from components, and create a custom
  type based on the post structure, and
  use that in the propTypes (note the case
  difference) declaration before exporting
  each component.

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
import React, { PropTypes, Component } from 'react';

/*
  We declare AppShell as a class, rather than
  as an arrow function because in the future
  we want to extend the AppShell component
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

  However, AppShell is a "state-ful" class
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
class AppShell extends Component {

  /*
    Here we create a render method, that React
    knows to call when we ask to mount the
    AppShell component, React returns the
    return value of this function.
  */
  render () {
    /*
      This is quite a common thing to do afaik,
      destructuring the props so we can use
      "this.props.children" as "children", in
      this case, though once multiple props are
      passed in to a component, this early
      opportunity to stop typing this.props
      is quite nice (to me anyway).
    */
    const { children } = this.props;

    /*
      Here, in the same way that we take advantage
      of the implicit return in an arrow function,
      we define the JSX we would like React to
      construct HTML from.
    */
    return (
      <div className='appShell'>
        {children}
      </div>
    );
  }
}

/*
  This will mean we are unable to render an
  instance of AppShell with no children defined.

  Which is pretty reasonable imo.

  The element PropType forces us to only pass
  a valid React Element as a child, which is a
  nice guard in case we try and render something
  that isn't a React element underneath the
  AppShell component.
*/
AppShell.propTypes = ({
  children: PropTypes.element.isRequired
});

/*
  Export the AppShell component so we can render it!
*/
export default AppShell;
