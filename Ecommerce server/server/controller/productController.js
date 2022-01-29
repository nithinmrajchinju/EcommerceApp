const product = require("../services/productService");

const create = (req, res) => {
    console.log(req.file);
    product.create(
        req
    ).then((result) => {
        res.json({status:'success',data: result})
    })
    .catch(err => {
        res.json({status:'error',data: err.message})
    })
}

const read = (req, res) => {
    product.read(
        req
    ).then((result) => {
        res.json({status:'success',data: result})
    })
    .catch(err => {
        res.json({status:'error',data: err.message})
    })
}

const update = (req, res) => {
    product.update(
        req
    ).then((result) => {
        res.json({status:'success',data: result})
    })
    .catch(err => {
        res.json({status:'error',data: err.message})
    })
}

const deleteId = (req, res) => {
    product.deleteId(
        req
    ).then((result) => {
        res.json({status:'success',data: result})
    })
    .catch(err => {
        res.json({status:'error',data: err.message})
    })
}

const list = (req, res) => {
    product.list(
        req
    ).then((result) => {
        res.json({status:'success',data: result})
    })
    .catch(err => {
        res.json({status:'error',data: err.message})
    })
}

module.exports = {
    create,
    read,
    update,
    deleteId,
    list
}