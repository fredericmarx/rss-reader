/*
  This is the final piece of the puzzle,
  the base file where we import the things
  we need to put our react components into
  the real DOM.
*/

/*
  We use JSX, let's pull in React.
*/
import React from 'react';

/*
  Now we're pulling in the render method
  from react-dom. This allows us to use the
  DOM as our target rendering platform.

  This separation of React and rendering
  targets is what makes stuff like
  React-Native possible. You import a
  different render function from a non-DOM
  package? Sure, you can still use React.

  Nice.
*/
import { render } from 'react-dom';

import Store from './store';

/*
  Here we call the render function we
  imported earlier, with our Routes
  component, and we find our DOM node
  to "mount" into, which will replace
  any contents that the DOM node has
  with our React controlled version.

  Reference:
    render(ReactComponent, DOM-target);
*/

render(
  <Store />,
  document.getElementById('base')
);
