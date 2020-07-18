const db = require("../models");
const Item = db.myShopItems;

// Create and Save a new Item
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
        message: err.message || "Some error occurred while creating the Item.",
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
        message: err.message || "Some error occurred while retrieving Items.",
      });
    });
};

// Find a single Item with an id
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
          message: `Cannot update item with id=${id}. Maybe Item was not found!`,
        });
      } else res.send({ message: "Item was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Item with id=" + id,
      });
    });
};
// Delete an item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Item.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Item with id=${id}. Maybe Item was not found!`,
        });
      } else {
        res.send({
          message: "Item was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Item with id=" + id,
      });
    });
};
// Delete all Items from the database.
exports.deleteAll = (req, res) => {
  Item.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Items were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Items.",
      });
    });
};

exports.updateAll = (req, res) => {
  Item.updateMany({}, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update all items!`,
        });
      } else res.send({ message: "Items were updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Item with ",
      });
    });
};

// Find all published Items
exports.findAllPublished = (req, res) => {};
