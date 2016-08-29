/*
  This is the Post component, that takes in a single
  "post" object as a property. It then pulls out
  specific parts of the post object, and renders
  them.
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
  This component is responsible for displaying
  actual feed/post content. We'll have some
  state that determines which post gets the
  "Read More" flag so that we display the
  whole post, rather than the summary.
*/

/*
  {
    metadata: {
      date: '2016-08-22T22:00:00.000Z'
    },
    title: 'Post Title',
    summary: 'A short summary of the important
              points raised in the post'
  }
*/

/*
  This component requires a post object passed
  in as a prop before it will render. This allows
  us to make sure that we don't get a load of
  "can't read property "title" of undefined"
  errors clogging up our console.
*/
const Post = ({ post }) => (
  <div className='post'>
    <h1 className='postTitle'>{post.title}</h1>
    <p className='postDate textLevel--small'>{post.metadata.date}</p>
    <p className='postText'>{post.summary}</p>
  </div>
);

/*
  This means we'll get an error if we try to render
  a Post component without a post prop, and we'll
  also get an error if we try to render a post prop
  that is not an object.
*/
Post.propTypes = ({
  post: PropTypes.object.isRequired
});

/*
  Export the Post function so we can use
  it elsewhere, and render some Posts!
*/
export default Post;
