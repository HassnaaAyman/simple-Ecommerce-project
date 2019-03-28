const db = require('../db');

const getCategoriesKey = (id) => `categories.${id}`
module.exports = {

    getAll() {
        return Object.values(db.get("categories"));
    },

    getById(id) {
        return db.get(`categories.${id}`);
    },

    add(category) {
        let categories = db.get('categories');
        let sortedIds = Object.keys(categories).sort().reverse();
        let id = sortedIds[0];
        category.id = Number(id) + 1;
        const keyName = getCategoriesKey(category.id);
        db.set(keyName, category)
        return category;
    },
    delete(id, returnOriginal) {
        let category = returnOriginal && this.getById(id);
        const key = getCategoriesKey(id);
        db.del(key);
        return category;
    },

    patch(id, updateCategory) {
        let category = this.getById(id);
        Object.assign(category, updateCategory);
        const key = getCategoriesKey(id);
        db.set(key, category);
    },
}