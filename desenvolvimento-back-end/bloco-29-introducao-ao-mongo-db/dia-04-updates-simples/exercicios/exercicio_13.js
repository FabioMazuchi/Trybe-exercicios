use('class');

// QUERY //
db.movies.updateMany(
  {
    $or: [
      { title: 'Batman' },
      { title: 'Home Alone' },
    ]
  },
  {
    $max: { imdbRating: 17 }
  }
);

// RESULTS //
[
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537b"
    },
    "title": "Batman",
    "category": ["action", "adventure"],
    "imdbRating": 38.8,
    "sequels": 0
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537c"
    },
    "title": "Godzilla",
    "category": ["action", "thriller", "sci-fi"],
    "imdbRating": 8.6,
    "sequels": 0
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537d"
    },
    "title": "Home Alone",
    "category": ["family", "comedy"],
    "imdbRating": 17,
     "lastUpdated": {
      "$timestamp": {
        "t": 1658424399,
        "i": 1
      }
    },
    "sequels": 0
  }
]