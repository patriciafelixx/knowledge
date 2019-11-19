module.exports = app => {
    app.post('/signup', app.api.user.save);
    app.post('/signin', app.api.auth.signin);
    app.post('/validateToken', app.api.auth.validateToken);
    
    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById);

    app.route('/categories')
        .all(app.config.passport.authenticate())
        .post(app.api.category.save)
        .get(app.api.category.get)

    // importante: a rota getTree deve estar antes de /categories/:id
    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree);

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.category.save)
        .get(app.api.category.getById)
        .delete(app.api.category.remove);

    app.route('/articles')
        .all(app.config.passport.authenticate())
        .post(app.api.article.save)
        .get(app.api.article.get);
    
    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.article.save)
        .get(app.api.article.getById)
        .delete(app.api.article.remove);   

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)        
}