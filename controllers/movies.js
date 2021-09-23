const {movies} = require('../models');

module.exports={
    getMovies: async (req, res) => {
        try {
          const data = await movies.findAll();
          if (!data) {
            return res.status(404).json({
              status: "failed",
              message: "Data not found",
              data: [],
            });
          }
          return res.status(200).json({
            status: "success",
            message: "Successfully retrieved movies tables",
            data: data,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            status: "failed",
            message: "Internal Server Error",
          });
        }
      }
}