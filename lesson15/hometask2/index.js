'use strict';

export const createLogger = () => {
  let loggers = [];
  let logger = {};
  function warn(str) {
    logger = {};
    logger.type = 'warn';
    logger.message = str;
    logger.dateTime = new Date();
    loggers.push(logger);
    return loggers;
  }

  function error(str) {
    logger = {};
    logger.type = 'error';
    logger.message = str;
    logger.dateTime = new Date();
    loggers.push(logger);
    return loggers;
  }

  function log(str) {
    logger = {};
    logger.type = 'log';
    logger.message = str;
    logger.dateTime = new Date();
    loggers.push(logger);
    return logger;
  }

  const getRecords = (type) => {
    if (!type) {
      return loggers.sort((a, b) => b.dateTime - a.dateTime);
    }
    if (loggers.length === 0) {
      return [];
    }

    const arr = loggers.filter((el) => el.type === type);

    if (arr.length) {
      return arr.sort((a, b) => b.dateTime - a.dateTime);
    } else {
      return [];
    }
  };

  return { warn, error, log, getRecords };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []
