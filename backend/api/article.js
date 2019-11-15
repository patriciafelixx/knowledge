module.exports = app => {
    const { exixtsOrError } = app.api.validation;

    const save = (req, res) => {
        const article = { ...req.body }
        if (req.params.id) article.id = req.params.id;

        try {
            exixtsOrError(article.name, 'Nome não informado');
            exixtsOrError(article.description, 'Descrição não informada');
            exixtsOrError(article.categoryId, 'Categoria não informada');
            exixtsOrError(article.userId, 'Autor não informado');
            exixtsOrError(article.content, 'Conteúdo não informado');
        } catch (msg) {
            res.status(400).send(msg);
        }

        if (article.id) {
            app.db('articles')
                .update(article)
                .where({ id: article.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        } else {
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDelete = await app.db('articles')
                .where({ id: req.params.id }).del();
            try {
                exixtsOrError(rowsDelete, 'Artigo não foi encontrado');
            } catch (msg) {
                return res.status(400).send(msg);
            }
            res.status(204).send();
        } catch (msg) {
            res.status(500).send(msg);
        }
    }

    const limit = 10;
    const get = async (req, res) => {
        const page = req.params.page || 1;

        const result = await app.db('articles').count('id').first();
        const count = parseInt(result.count);

        app.db('articles')
            .select('id', 'name', 'description')
            .limit(limit).offset(page * limit - limit)
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err));
    }

    const getById = (req, res) => {
        app.db('articles')
            .where({ id: req.params.id })
            .first()
            .then(article => {
                article.content = article.content.toString();
                return res.json(article);
            })
            .catch (err => res.status(500).send(err));
    }

    return { save, remove, get, getById }
}