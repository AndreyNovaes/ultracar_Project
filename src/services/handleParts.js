import { parts } from "../database/mockDB";

function getAllParts() {
  return parts;
}
  
function getPartById(id) {
  return parts.find((part) => part.id === id);
}

function createPart({ name, description, price, quantity, vehicleId }) {
  if ( !name ) error: 'Name is required'
  if ( !description ) error: 'Description is required'
  if ( !price ) error: 'Price is required'
  if ( !quantity ) error: 'Quantity is required'
  if ( !vehicleId ) error: 'Vehicle ID is required'
  const id = Math.max(...parts.map((part) => part.id)) + 1;
  return parts.push({ id, name, description, price, quantity, vehicleId });
}

function updatePart(id, { name, description, price, quantity, vehicleId }) {
  const part = getPartById(id);
  if (part) {
    part.name = name;
    part.description = description;
    part.price = price;
    part.quantity = quantity;
    part.vehicleId = vehicleId;
  }
  return part;
}

function deletePart(id) {
  const part = getPartById(id);
  if (part) {
    const index = parts.indexOf(part);
    parts.splice(index, 1);
  }
  return part;
}

export {
  getAllParts,
  getPartById,
  createPart,
  updatePart,
  deletePart,
};
