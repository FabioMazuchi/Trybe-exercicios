use("cinema");

// QUERY //
db.movies.updateOne(
  { title: 'Batman'},
  { $addToSet: { category: 'action' } }
);

// RESULTS //
[
  {
    _id: {
      $oid: "62dae27b66674456e3febee0",
    },
    title: "Batman",
    category: ["superhero", "villain", "action"],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    _id: {
      $oid: "62dae27b66674456e3febee1",
    },
    title: "Godzilla",
    category: ["action", "adventure", "sci-fi"],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    _id: {
      $oid: "62dae27b66674456e3febee2",
    },
    title: "Home Alone",
    category: ["family", "comedy"],
    imdbRating: 7.4,
  },
];
