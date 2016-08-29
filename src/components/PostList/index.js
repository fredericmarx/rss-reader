/*
  This component will hold a list of Post components,
  and will serve as the main focal component on the main
  page.
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
*/
import React, { PropTypes } from 'react';

/*
  This component will need to know where the
  Post component is, so that it can render a
  Post component for each post in the feed.
*/
import Post from '../Post';

/*
  This component requires a feeds prop that is an
  array of feeds to render posts from.
*/
const PostList = ({ feeds }) => {
  /*
    Here we set up our array of Post
    components to render inside the PostList
    container element.

    We take each feed, and pull out the posts
    array, (remember each feed also has a metadata
    object attached to it), and then for each post,
    in each feed, we render a Post component.

    The key={index} thing is a performance booster
    for React, and whenever you're iterating
    through data to construct a set of components,
    using key={index} allows React's super hip
    virtual-DOM differ to diff based on keys,
    rather than content of objects, which massively
    speeds up sorting sets of data, (as we'll find
    out when we want to sort posts by date/feed URL
    etc).

    Reference:
    Array.map(function (ArrayItem, index, Array) {
      // Do a thing with access to each item, the
      // index of each item, and the Array itself
    });
  */
  const posts =
    feeds.map((feed) => (
      feed.posts.map((post, index) => (
        <Post
          key={index}
          post={post}
        />
      ))
    ));

  /*
    We can use the curly brace syntax to tell React
    to use the result of the code inside, in this
    case a variable name, rather than render "posts",
    to instead render the data that the variable
    `posts` points to.

    This could also be written as follows:

    <div className='postList'>
      {
        feeds.map((feed) => (
          feed.posts.map((post, index) => (
            <Post
              key={index}
              post={post}
            />
          ))
        ))
      }
    </div>

    Though I like to try and keep wrapper elements
    and iteration based elements separate so as not
    to muddle with understanding final output.
  */
  return (
    <div className='postList'>
      {posts}
    </div>
  );
};

/*
  Here we'll check for an array of feeds before
  rendering the PostList component
*/

PostList.propTypes = ({
  feeds: PropTypes.array.isRequired
});

export default PostList;
