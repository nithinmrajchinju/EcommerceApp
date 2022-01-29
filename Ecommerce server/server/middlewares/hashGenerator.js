const createHash = require('hash-generator')

const hashGenerate = () => {
    const hash = createHash(6);
    return hash;
}

module.exports = {
    hashGenerate
}