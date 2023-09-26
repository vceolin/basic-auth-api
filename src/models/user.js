const knex = require("knex");
const config = require("../config/config");

const db = knex(config.database);

const createUser = async (user) => {
  return await db("users").insert(user);
};

const findUserByUsername = async (username) => {
  return await db("users").where({ username }).first();
};

module.exports = {
  createUser,
  findUserByUsername,
};
