use('class');

// QUERY //
db.movies.updateOne(
  { title: 'Batman' },
  { $set: { imdbRating: 7.7 } }
);

// RESULTS //
[
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537b"
    },
    "title": "Batman",
    "category": ["action", "adventure"],
    "imdbRating": 7.7,
    "budget": 35
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537c"
    },
    "title": "Godzilla",
    "category": ["action", "adventure", "sci-fi"],
    "imdbRating": 6.6
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537d"
    },
    "title": "Home Alone",
    "category": ["family", "comedy"],
    "imdbRating": 7.4
  }
]