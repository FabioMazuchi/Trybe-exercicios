use('class');

// QUERY //
db.movies.updateMany(
  { title: 'Batman' },
  { $rename: { 'budget': 'estimatedBudget' } }
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
    "category": ["action", "adventure", "sci-fi"],
    "imdbRating": 6.6,
    "budget": 1
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537d"
    },
    "title": "Home Alone",
    "category": ["family", "comedy"],
    "imdbRating": 5.5,
    "budget": 20
  }
]