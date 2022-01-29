const report = require('../services/reportService');

const lowStock = (req,res)=>{
    report.lowStock()
    .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => res.json({ status: 'error', data: err.message }))
}

const outOfStock = (req,res)=>{
    report.outOfStock()
    .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => res.json({ status: 'error', data: err.message }))
}

module.exports = {
    lowStock,
    outOfStock
}