require("dotenv").config();
const path = require("path");

const migrationsDirectory = path.join(__dirname, "src", "db", "migrations");
const migrationsStub = path.join(__dirname, "migration-stub.js");
const seedsDirectory = path.join(__dirname, "src", "db", "seeds");

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: migrationsDirectory,
      stub: migrationsStub,
    },
    seeds: {
      directory: seedsDirectory,
    },
  },
  test: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: migrationsDirectory,
      stub: migrationsStub,
    },
    seeds: {
      directory: seedsDirectory,
    },
  },
};
