const db = require('../models')

module.exports = (function (app) {
    app.get('/api/workouts', (req,res) => {
        db.Workout.find()
            .then(activity => {
                res.json(activity)
            }).catch(err => {
                res.json(err)
            })
    })

    app.post('/api/workouts', ({body},res) => {
        db.Workout.create({body})
            .then(activity => {
                res.json(activity)
            }).catch(err => {
                res.json(err)
            })
    })
    
    app.post('/api/workouts/:id', ({body, params },res) => {
        db.Workout.findByIdAndUpdate({body})
            .then(activity => {
                res.json(activity)
            }).catch(err => {
                res.json(err)
            })
    })


    app.get('/api/workouts/range')

})
