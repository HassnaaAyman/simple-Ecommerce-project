const db = require('../db');

const getProductKey = (id) => `products.${id}`;

module.exports = {
    getAll() {
        return Object.values(db.get('products'));
    },
    getById(id) {
        return db.get(`products.${id}`)
    },
    add(product) {
        const products = db.get('products');
        let sortedIds = Object.keys(products).sort().reverse();
        let id = sortedIds[0];
        product.id = Number(id) + 1;
        const keyName = getProductKey(product.id);
        db.set(keyName, product)
        return product;
    },
    delete(id, returnOriginal) {
        let product = returnOriginal && this.getById(id);
        const keyName = getProductKey(id);
        db.del(keyName)
        return product;
    },
    patch(id, productUpdate) {
        let product = this.getById(id);
        Object.assign(product, productUpdate);
        const keyName = getProductKey(id);
        db.set(keyName, product);
    },

}
