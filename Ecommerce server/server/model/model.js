const mongoose = require('mongoose');

const users = mongoose.model('users', {
    id: String,
    mail: String,
    name: String,
    password: String,
    mobileNumber: Number,
    status: { type: Boolean, default: true }
})

const customer = mongoose.model('customers', {
    mail: String,
    name: String,
    password: String,
    phone: Number,
    date: { type: Date, default: Date.now() },
    status: Boolean,
    address: { type: Array, default: [] },
    dob: Date,
    country: String,
    language: String,
    image: String
})

const products = mongoose.model('products', {
    productName: String,
    productCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'categorys' },
    productStock: Number,
    productPrice: Number,
    productDiscount: Number,
    productSKU: String,
    minimumPurchase: String,
    productDescription: String,
    productImage: String,
    variations: String,
    productTax: Number,
    productRating: { type: Number, default: null },
    status: { type: Boolean, default: true }
})

const categorys = mongoose.model('categorys', {
    categoryName: String,
    categoryImage: String,
    categoryRecommented: { type: Boolean, default: false }
})

const carts = mongoose.model('carts', {
    userId: String,
    amount: Number,
    discount: Number,
    couponCode: String,
    tax: Number,
    wishList: Array,
    list: Array
})

const tokens = mongoose.model('tokens', {
    userid: String,
    token: String,
    createdAt: { type: Date, expires: 18000 }
})

const promotions = mongoose.model('promotions', {
    name: String,
    discount: Number,
    code: String,
    expiryStart: { type: Date, default: Date.now() },
    expiryEnd: { type: Date, default: Date.now() },
    hasExpiry: { type: Boolean, default: false }
})

const orders = mongoose.model('orders', {
    user: String,
    orderId: String,
    productList: Array,
    totalAmount: Number,
    discount: Number,
    haveCoupon: Boolean,
    couponCode: String,
    deliveryAddress: Object,
    estimateDelivery: Date,
    invoiceFile: String,
    orderStatus: { type: Boolean, default: true }
})

const admins = mongoose.model('admins', {
    name: String,
    mail: String,
    password: String,
    permission: Array,
    date: { type: Date, default: Date.now() }
})

const banners = mongoose.model('banners', {
    name: String,
    image: String,
    category: String
})

const reviews = mongoose.model('reviews', {
    user: String,
    productid: String,
    description: String,
    rating: Number,
    date: Date
})

module.exports = {
    users,
    products,
    categorys,
    carts,
    tokens,
    promotions,
    orders,
    admins,
    banners,
    customer,
    reviews
}