const db = require('../model/model');

const lowStock =async () => {
    return new Promise(async (resolve, reject) => {
        resolve(db.products.find({"productStock": {$lte: 5}}))
    })}

const outOfStock = async () => {
    return new Promise(async (resolve, reject) => {
        resolve(db.products.find({"productStock": {$eq: 0}}))
    })}

module.exports = {
    lowStock,
    outOfStock
}