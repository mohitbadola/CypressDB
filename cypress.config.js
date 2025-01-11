const { defineConfig } = require("cypress");
const mysql2 = require("mysql2");

// Function to query the database
function queryTestDb(query, config) {
  const connection = mysql2.createConnection(config.env.db);
  connection.connect();
  
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        connection.end();
        resolve(results);
      }
    });
  });
}

// Export configuration
module.exports = defineConfig({
  env: {
    db: {
      host: "localhost",
      user: "root",
      password: "SOhit20#",
      database: "jason", // Your database name
    },
  },
  e2e: {
    specPattern: 'cypress/integration/examples/*.js',
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // Register the custom 'queryDb' task for querying the database
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config); // Use the queryTestDb function here
        },
      });

      return config; // Return the config object
    },
  },
});
