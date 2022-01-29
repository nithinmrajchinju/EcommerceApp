const db = require('../model/model');

const add = (req) => {
    return new Promise(async (resolve, reject) => {
        const duplicate = await db.reviews.findOne({ user: req.body.user, productid: req.body.productid })
        if (duplicate) {
            reject({ message: 'User Review Already Exist' })
            return
        }
        resolve(new db.reviews(Object.assign(req.body)).save())
    })
}

const read = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.reviews.find({ productid: req.params.id }))
    })
}

const update = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.reviews.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    })
}

const deleteId = (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.reviews.findByIdAndDelete(req.params.id))
    })
}

const list = (req) => {
    console.log(req.query);
    const filter = req.query.filter
    const page = req.query.page
    const limit = req.query.limit
    const xpage = page && limit ? (parseInt(req.query.page) - 1) * parseInt(req.query.limit) : undefined
    const xlimit = page && limit ? parseInt(req.query.limit) : undefined
    const sort = req.query.sort
    return db.reviews.find(filter).skip(xpage).limit(xlimit).sort(sort).populate().exec().then((list) => {
        if (!list) {
            return {
                statusCode: 422,
                status: false,
                message: "invalid"
            }
        }
        return {
            statusCode: 200,
            status: true,
            message: "successfully",
            list
        }
    })
}
const productRating = async (productid) => {
    const reviews = await db.reviews.find({ productid: productid })
    let rating = 0, total = 0, productRating = 0;
    reviews.forEach(review => {
        rating = rating + (review.rating);
        total++;
    });
    productRating = rating / total;
    console.log(productRating);
    return db.products.findOneAndUpdate({ productName: productid }, { productRating: productRating })

}

module.exports = {
    add,
    read,
    update,
    deleteId,
    list,
    productRating
}