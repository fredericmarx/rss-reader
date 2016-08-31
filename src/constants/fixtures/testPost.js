/*
  Dates are constructed via a "new Date()" constructor,
  and the built in .toJSON() method.
*/

const testPost = {
  title: 'test',
  summary: 'I am testing the thing',
  metadata: {
    date: '2016-08-15T22:00:00.000Z'
  }
};

export default testPost;
