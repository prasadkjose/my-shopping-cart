const db = require("../models");
const Item = db.myShopItems;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.item) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a new item
  const newItem = new Item({
    item: req.body.item,
    quantity: req.body.quantity,
    check: req.body.check ? req.body.check : false,
  });

  // Save Tutorial in the database
  newItem
    .save(newItem)
    .then((data) => {
      //send the data to display after CRUD command
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const item = req.query.item;
  var condition = item
    ? { item: { $regex: new RegExp(item), $options: "i" } }
    : {};

  Item.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
