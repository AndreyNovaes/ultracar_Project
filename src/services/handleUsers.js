import { users } from "../database/mockDB";

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function createUser({ name, email, phone}) {
  if ( !name ) error: 'Name is required'
  if ( !email ) error: 'Email is required'
  if ( !phone ) error: 'Phone is required'
  const id = Math.max(...users.map((user) => user.id)) + 1;
  console.log(id);
  return users.push({ id, name, email, phone });
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
    const index = users.indexOf(user);
    users.splice(index, 1);
  }
  return user;
}

export {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
