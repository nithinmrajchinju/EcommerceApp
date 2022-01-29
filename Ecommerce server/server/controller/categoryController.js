const category = require("../services/categoryService");

const add = async (req, res) => {
    category.add(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const read = (req, res) => {
    category.read(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const update = (req, res) => {
    category.update(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const deleteId = (req, res) => {
    category.deleteId(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const list = (req, res) => {
    category.list(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

module.exports = {
    add,
    read,
    update,
    deleteId,
    list
}