module.exports = app =>{
    const Stat = app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createAt: Date
    })

    const get = (req, res) => {
        Stat.findOne({}, {}, { sort: {'creat At' : -1 } })
            .then(stat => {
                const defautStats = {
                    users: 0,
                    categories: 0,
                    articles: 0
                }
                res.json(stat || defautStats);
            })
    }

    return { Stat, get }
}