import { vehicles } from "../database/mockDB";

function getAllVehicles() {
  return vehicles;
}

function getVehicleById(id) {
  return vehicles.find((vehicle) => vehicle.id === id);
}

function createVehicle({ make, model, year, clientId }) {
  if ( !make ) error: 'Make is required'
  if ( !model ) error: 'Model is required'
  if ( !year ) error: 'Year is required'
  if ( !clientId ) error: 'Client ID is required'
  const id = Math.max(...vehicles.map((vehicle) => vehicle.id)) + 1;
  return vehicles.push({ id, make, model, year, clientId });
}

function updateVehicle(id, { make, model, year, clientId }) {
  const vehicle = getVehicleById(id);
  if (vehicle) {
    vehicle.make = make;
    vehicle.model = model;
    vehicle.year = year;
    vehicle.clientId = clientId;
  }
  return vehicle;
}

function deleteVehicle(id) {
  const vehicle = getVehicleById(id);
  if (vehicle) {
    const index = vehicles.indexOf(vehicle);
    vehicles.splice(index, 1);
  }
  return vehicle;
}

export {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
