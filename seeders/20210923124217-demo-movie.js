'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("movies", [
      {
        title: "Interstellar",
        poster: "https://upload.wikimedia.org/wikipedia/id/thumb/b/bc/Interstellar_film_poster.jpg/375px-Interstellar_film_poster.jpg",
        synopsis: "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.—ahmetkozan",
        rating: 4.3,
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        releaseDate: "06-11-2014",
        director: "Christopher Nolan",
        featuredSong: "https://www.youtube.com/watch?v=kpK4cDk2bRs",
        budget: "$165000000",
        genre:"Adventure, Drama, Sci-Fi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/id/c/c1/The_Matrix_Poster.jpg",
        synopsis: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion.—redcommander27",
        rating: 4.35,
        trailer: "https://www.youtube.com/watch?v=9ix7TUGVYIo",
        releaseDate: "31-03-1999",
        director: "Lana Wachowski,Lilly Wachowski",
        featuredSong: "https://www.youtube.com/watch?v=pFS4zYWxzNA",
        budget: "$63000000",
        genre:"Action, Sci-Fi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Avengers: Endgame",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        synopsis: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
        rating: 4.2,
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        releaseDate: "24-04-2019",
        director: "Anthony Russo, Joe Russo",
        featuredSong: "https://www.youtube.com/watch?v=F_mhWxOjxp4",
        budget: "$356000000",
        genre:"Action, Adventure, Drama, Sci-Fi",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
