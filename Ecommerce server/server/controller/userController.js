const service = require("../services/userService");

const register = (req, res) => {
    service.register(req)
    .then((result) => {
        res.json({ status: 'success', data: result })
    })
    .catch(err => res.json({ status: 'error', data: err.message }))
}

const login = (req, res) => {
    service.login(req)
    .then((result) => {
        res.json({ status: 'success', data: result })
    })
    .catch(err => res.json({ status: 'error', data: err.message }))
}

const update = (req, res) => {
    service.update(req)
    .then((result) => {
        res.json({ status: 'success', data: result })
    })
    .catch(err => res.json({ status: 'error', data: err.message }))
}

const deleteId = (req, res) => {
    service.deleteId(req)
    .then((result) => {
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

const resetrequest = (req, res) => {
    service.passwordReset(req)
    .then((result) => {
        res.json({ status: 'success', data: result })
    })
    .catch(err => res.json({ status: 'error', data: err.message }))
}

const resetverify = (req, res) => {
    service.passwordVerify(req)
    .then((result) => {
        res.json({ status: 'success', data: result })
    })
    .catch(err => res.json({ status: 'error', data: err.message }))
}

const changePassword = (req, res) => {
    service.changePassword(req)
    .then((result) => {
        res.json({ status: 'success', data: result })
    })
    .catch(err => res.json({ status: 'error', data: err.message }))
}

module.exports = {
    register,
    login,
    update,
    deleteId,
    list,
    resetrequest,
    resetverify,
    changePassword
}