use("cinema");

// QUERY //
db.movies.updateMany(
  {
    title: {
      $in: ["Batman", "Home Alone"],
    },
  },
  {
    $push: { category: "90's" },
  }
);

// RESULTS //
[
  {
    _id: {
      $oid: "62dae27b66674456e3febee0",
    },
    title: "Batman",
    category: ["superhero", "villain", "action", "90's"],
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
    category: ["family", "comedy", "90's"],
    imdbRating: 7.4,
  },
];
