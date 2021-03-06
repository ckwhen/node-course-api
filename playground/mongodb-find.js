const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos')
  .find({
    _id: new ObjectID('5a35ee146c9ee7196a70330c'),
  })
  .toArray()
  .then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  })
  .catch((err) => {
    console.log('U', err);
  });

  // db.close();
});
