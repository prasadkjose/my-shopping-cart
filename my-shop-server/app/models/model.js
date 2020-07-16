module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      item: String,
      quantity: String,
      check: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const myShopModel = mongoose.model("my-shop-collection", schema);
  return myShopModel;
};
