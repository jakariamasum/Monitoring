const { sampleHandler } = require('./handlers/sampleHandler');
const { userHandler } = require('./handlers/userHandler');
const route = {
    'sample': sampleHandler,
    'user': userHandler,
}

module.exports = route