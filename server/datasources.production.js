module.exports = {
  'MongoDB': {
    'name': 'MongoDB',
    'connector': 'loopback-connector-mongodb',
    'url': process.env.MONGODB_URI || process.env.MONGOHQ_URL,
  },
};

