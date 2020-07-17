const db = require("../models");
const Item = db.myShopItems;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // // Validate request
  // if (!req.body.item) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a new item
  const newItem = new Item({
    item: req.body.item,
    quantity: req.body.quantity,
    check: req.body.check ? req.body.check : false,
  });

  // Save the item in the database
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
// Retrieve all items from the database.
exports.findAll = (req, res) => {
  const item = req.query.item;

  Item.find({
    //put conditions here
  })
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

// Update an Item by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update item with id=${id}. Maybe Tutorial was not found!`,
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
