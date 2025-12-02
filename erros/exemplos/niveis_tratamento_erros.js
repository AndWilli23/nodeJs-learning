//Utilizando Callbacks que priorizam erros

const fs = require('fs');

function readConfigFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      // Handle specific error types
      if (err.code === 'ENOENT') {
        return callback(new Error(`Config file ${filename} not found`));
      } else if (err.code === 'EACCES') {
        return callback(new Error(`No permission to read ${filename}`));
      }
      // For all other errors
      return callback(err);
    }

    // Process data if no error
    try {
      const config = JSON.parse(data);
      callback(null, config);
    } catch (parseError) {
      callback(new Error(`Invalid JSON in ${filename}`));
    }
  });
}

// Usage
readConfigFile('config.json', (err, config) => {
  if (err) {
    console.error('Failed to read config:', err.message);
    // Handle the error (e.g., use default config)
    return;
  }
  console.log('Config loaded successfully:', config);
});

//Utilizando try...catch com Async/Await

const fs = require('fs').promises;

async function loadUserData(userId) {
  try {
    const data = await fs.readFile(`users/${userId}.json`, 'utf8');
    const user = JSON.parse(data);

    if (!user.email) {
      throw new Error('Invalid user data: missing email');
    }

    return user;
  } catch (error) {
    // Handle different error types
    if (error.code === 'ENOENT') {
      throw new Error(`User ${userId} not found`);
    } else if (error instanceof SyntaxError) {
      throw new Error('Invalid user data format');
    }
    // Re-throw other errors
    throw error;
  } finally {
    // Cleanup code that runs whether successful or not
    console.log(`Finished processing user ${userId}`);
  }
}

// Usage
(async () => {
  try {
    const user = await loadUserData(123);
    console.log('User loaded:', user);
  } catch (error) {
    console.error('Failed to load user:', error.message);
    // Handle error (e.g., show to user, retry, etc.)
  }
})();

//Exceções não tratadas

// Handle uncaught exceptions (synchronous errors)
process.on('uncaughtException', (error) => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(error.name, error.message);

  // Perform cleanup (close database connections, etc.)
  server.close(() => {
    console.log('Process terminated due to uncaught exception');
    process.exit(1); // Exit with failure
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error('Unhandled Rejection at:', promise, 'Reason:', reason);

  // Close server and exit
  server.close(() => {
    process.exit(1);
  });
});

// Example of an unhandled promise rejection
Promise.reject(new Error('Something went wrong'));

// Example of an uncaught exception
setTimeout(() => {
  throw new Error('Uncaught exception after timeout');
}, 1000);