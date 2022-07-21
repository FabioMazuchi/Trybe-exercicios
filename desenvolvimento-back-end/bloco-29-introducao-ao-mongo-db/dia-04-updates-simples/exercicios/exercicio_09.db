use('class');

// QUERY //
db.movies.updateMany(
  { title: 'Godzilla' },
  {
    $max: { imdbRating: 8.6 },
    $set: { 'category.1': 'thriller' }, 
  },
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
    "estimatedBudget": 35
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537c"
    },
    "title": "Godzilla",
    "category": ["action", "thriller", "sci-fi"],
    "imdbRating": 8.6,
    "budget": 1
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537d"
    },
    "title": "Home Alone",
    "category": ["family", "comedy"],
    "imdbRating": 5.5,
    "budget": 5
  }
]