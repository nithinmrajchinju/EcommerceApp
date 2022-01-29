const service = require("../services/customerService");

const register = async (req, res) => {
    service.register(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const login = async (req, res) => {
    service.login(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const read = (req, res) => {
    service.read(
        req
    ).then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const update = (req, res) => {
    service.update(
        req
    ).then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const deleteId = (req) => {
    service.deleteId(
        req
    ).then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const list = (req, res) => {
    service.list(
        req
    ).then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const resetrequest = (req, res) => {
    service.passwordReset(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const resetverify = (req, res) => {
    service.passwordVerify(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const updatePhoto = (req, res) => {
    service.updatePhoto(req)
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
    register,
    login,
    read,
    update,
    deleteId,
    list,
    resetrequest,
    resetverify,
    updatePhoto,
    changePassword
}