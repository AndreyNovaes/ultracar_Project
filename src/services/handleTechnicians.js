import { technicians } from "../database/mockDB";

function getAlltechnicians() {
  return technicians;
}

function getTechniciasById(id) {
  return technicians.find((user) => user.id === id);
}

function createUser({ name, email, phone}) {
  if ( !name ) error: 'Name is required'
  if ( !email ) error: 'Email is required'
  if ( !phone ) error: 'Phone is required'
  const id = Math.max(...technicians.map((user) => user.id)) + 1;
  console.log(id);
  return technicians.push({ id, name, email, phone });
}

function updateUser(id, { name, email, phone }) {
  const user = getUserById(id);
  if (user) {
    user.name = name;
    user.email = email;
    user.phone = phone;
  }
  return user;
}

function deleteUser(id) {
  const user = getUserById(id);
  if (user) {
    const index = technicians.indexOf(user);
    technicians.splice(index, 1);
  }
  return user;
}

export { 
  getAlltechnicians,
  getTechniciasById,
  createUser,
  updateUser,
  deleteUser,
};
