import Movie from "../models/Movie.js";

export const getseats = async (req, res, next) => {
  let movie;
  try {
    movie = await Movie.find();
  } catch (err) {
    return console.log(err);
  }
  if (!movie) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ movie });
};


export const postseats = async (req, res) => {
    const { name, ticket } = req.body;

    let event;
    try {
      event = new Movie({ name, ticket });
      event = await event.save();
    } catch (err) {
      return console.log(err);
    }
    if (!event) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ id: event._id });

};
