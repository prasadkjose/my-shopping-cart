import http from "../http-common";

const getAll = () => {
  return http.get("/items/");
};

const create = (data) => {
  return http.post("/items", data);
};
const update = (id, data) => {
  return http.put(`/items/${id}`, data);
};
const updateAll = (data) => {
  return http.put("/items", data);
};

const remove = (id) => {
  return http.delete(`/items/${id}`);
};

const removeAll = () => {
  return http.delete("/items");
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  updateAll,
};
