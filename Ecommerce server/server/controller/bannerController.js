const service = require("../services/bannerService");

const add = (req, res) => {
    service.add(req)
        .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => {
            res.json({ status: 'error', data: err.message })
        })
}

const read = (req, res) => {
    service.read(req)
        .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => {
            res.json({ status: 'error', data: err.message })
        })
}

const update = (req, res) => {
    service.update(req)
        .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => {
            res.json({ status: 'error', data: err.message })
        })
}

const deleteId = (req, res) => {
    service.deleteId(req)
        .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => {
            res.json({ status: 'error', data: err.message })
        })
}

const list = (req, res) => {
    service.list(req)
        .then((result) => {
            res.json({ status: 'success', data: result })
        })
        .catch(err => {
            res.json({ status: 'error', data: err.message })
        })
}

module.exports = {
    add,
    read,
    update,
    deleteId,
    list
}