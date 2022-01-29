const service = require("../services/adminService");

const create = (req, res) => {
    service.create(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const read = (req, res) => {
    service.read(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const update = (req, res) => {
    service.update(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const deleteId = (req, res) => {
    service.deleteId(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const list = (req, res) => {
    service.list(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const changePassword = (req, res) => {
    service.changePassword(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

module.exports = {
    create,
    read,
    update,
    deleteId,
    list,
    changePassword
}