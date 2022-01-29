const service = require("../services/reviewService");

const add = (req, res) => {
    service.add(req)
        .then((result) => {
            service.productRating(req.body.productid)
            res.json({ status: 'success', data: result })
        })
        .catch(err => res.json({ status: 'error', data: err.message }))
}

const read = (req, res) => {
    service.read(req)
        .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => res.json({ status: 'error', data: err.message }))
}

const update = (req, res) => {
    service.update(req)
        .then((result) => {
            service.productRating(req.body.productid)
            res.json({ status: 'success', data: result })
        })
        .catch(err => res.json({ status: 'error', data: err.message }))
}

const deleteId = (req, res) => {
    service.deleteId(req)
        .then((result) => {
            service.productRating(result.productid)
            console.log(result.productid)
            res.json({ status: 'success', data: result })
        })
        .catch(err => res.json({ status: 'error', data: err.message }))
}

const list = (req, res) => {
    service.list(req)
        .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => res.json({ status: 'error', data: err.message }))
}

module.exports = {
    add,
    read,
    update,
    deleteId,
    list
}