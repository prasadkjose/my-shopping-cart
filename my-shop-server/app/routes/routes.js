module.exports = (app) => {
  const items = require("../controllers/controller.js");

  var router = require("express").Router();

  // Create a new items
  router.post("/", items.create);

  // Retrieve all items
  router.get("/", items.findAll);

  // Retrieve all published items
  router.get("/published", items.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", items.findOne);

  // Update a Tutorial with id
  router.put("/:id", items.update);

  // Update All items
  router.put("/", items.updateAll);

  // Delete an item with id
  router.delete("/:id", items.delete);

  // delete all items
  router.delete("/", items.deleteAll);

  app.use("/api/items", router);
};
