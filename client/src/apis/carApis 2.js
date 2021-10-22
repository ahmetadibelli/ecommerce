import request from "./axios";
export const allCars = (query) => request.get(`/car/car?${query}`);
// get all cars by user id
export const allUserCars = (id) => request.get(`/car/car?user=${id}`);
export const addCar = (body) => request.post("/car/car", body);
export const updateCar = (body, id) => request.patch(`/car/car/${id}`, body);
export const deleteCar = (id) => request.delete(`/car/car/${id}`);
