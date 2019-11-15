module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById);

    app.route('/categories')
        .post(app.api.category.save)
        .get(app.api.category.get)

    // importante: a rota getTree deve estar antes de /categories/:id
    app.route('/categories/tree')
        .get(app.api.category.getTree);

    app.route('/categories/:id')
        .put(app.api.category.save)
        .get(app.api.category.getById)
        .delete(app.api.category.remove);
}