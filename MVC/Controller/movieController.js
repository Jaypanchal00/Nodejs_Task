const movieModel = require("../model/movieModel");

const addMovie = async (req, res) => {
    const data = await BookModel.create(req.body);
    res.send(data);
};

const getMovie  = async (req, res) => {
    const data = await BookModel.find();
    res.send(data);
};

const deleteMovie  = async (req, res) => {
    const data = await BookModel.findByIdAndDelete(req.params.id);
    res.send("Book Deleted");
};

const editMovie  = async (req, res) => {
    const id = req.params.id;
    const data = await BookModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
};


module.exports = { addMovie, editMovie, deleteMovie,getMovie };