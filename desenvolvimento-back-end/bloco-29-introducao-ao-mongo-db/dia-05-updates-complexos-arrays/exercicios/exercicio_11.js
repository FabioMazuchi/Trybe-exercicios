use("cinema");

// QUERY //
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: { "cast.$.actor": "Christian Bale" },
  }
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Alfred",
  },
  {
    $push: { "cast.$.actor": "Michael Caine" },
  }
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Coringa",
  },
  {
    $push: { "cast.$.actor": "Heath Ledger" },
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
    cast: [
      {
        character: "Batman",
        actor: ["Christian Bale"],
      },
      {
        character: "Alfred",
        actor: ["Michael Caine"],
      },
      {
        character: "Coringa",
        actor: ["Heath Ledger"],
      },
    ],
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
    cast: [
      {
        actor: "Macaulay Culkin",
        character: "Kevin",
      },
      {
        actor: "Joe Pesci",
        character: "Harry",
      },
      {
        actor: "Daniel Stern",
        character: "Marv",
      },
    ],
  },
];
