import { services } from "../database/mockDB";

function getAllServices() {
  console.log(services);
  return services;
}

function getServiceById(id) {
  return services.find((service) => service.id === id);
}

function createService({ vehicleId, technicianId, startTime, expectedEndTime, realEndTime, description, status, parts }) {
  if ( !vehicleId ) error: 'Vehicle ID is required'
  if ( !technicianId ) error: 'Technician ID is required'
  if ( !startTime ) error: 'Start Time is required'
  if ( !expectedEndTime ) error: 'Expected End Time is required'
  if ( !realEndTime ) error: 'Real End Time is required'
  if ( !description ) error: 'Description is required'
  if ( !status ) error: 'Status is required'
  if ( !parts ) error: 'Parts is required'
  const id = Math.max(...services.map((service) => service.id)) + 1;
  return services.push({ id, vehicleId, technicianId, startTime, expectedEndTime, realEndTime, description, status, parts });
}

function updateService(id, { vehicleId, technicianId, startTime, expectedEndTime, realEndTime, description, status, parts }) {
  const service = getServiceById(id);
  if (service) {
    service.vehicleId = vehicleId;
    service.technicianId = technicianId;
    service.startTime = startTime;
    service.expectedEndTime = expectedEndTime;
    service.realEndTime = realEndTime;
    service.description = description;
    service.status = status;
    service.parts = parts;
  }
  return service;
}

function deleteService(id) {
  const service = getServiceById(id);
  if (service) {
    const index = services.indexOf(service);
    services.splice(index, 1);
  }
  return service;
}

export {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
