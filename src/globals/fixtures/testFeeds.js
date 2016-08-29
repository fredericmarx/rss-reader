/*
  Dates are constructed via a "new Date()" constructor,
  and the built in .toJSON() method.
*/

const testFeeds = [
  {
    metadata: {
      url: 'feed-url.com/feed'
    },
    posts: [
      {
        metadata: {
          date: '2016-08-22T22:00:00.000Z'
        },
        title: 'Post Title',
        summary: 'A short summary of the important points raised in the post'
      },
      {
        metadata: {
          date: '2016-08-19T22:00:00.000Z'
        },
        title: 'A Second Post Title',
        summary: 'A short summary of the important points raised in the post'
      },
      {
        metadata: {
          date: '2016-08-15T22:00:00.000Z'
        },
        title: 'A Third Post Title',
        summary: 'A short summary of the important points raised in the post'
      }
    ]
  },
  {
    metadata: {
      url: 'another-feed-url.com/feed'
    },
    posts: [
      {
        metadata: {
          date: '2016-08-24T22:00:00.000Z'
        },
        title: 'Post Title - Feed 2',
        summary: 'A short summary of the important points raised in the post'
      },
      {
        metadata: {
          date: '2016-08-20T22:00:00.000Z'
        },
        title: 'A Second Post Title - Feed 2',
        summary: 'A short summary of the important points raised in the post'
      }
    ]
  }
];

export default testFeeds;
