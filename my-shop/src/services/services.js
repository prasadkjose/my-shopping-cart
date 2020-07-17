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

export default {
  getAll,
  create,
  update,
};
