import http from "../http-common";

const getAll = () => {
  return http.get("/tutorials");
};

const create = (data) => {
  return http.post("/tutorials", data);
};
const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};
const updateAll = (data) => {
  return http.put("/tutorials", data);
};

const remove = (id) => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete("/tutorials");
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  updateAll,
};
