const express = require('express');
const minionsRouter = express.Router();

const { getAllFromDatabase,
        addToDatabase,
        getFromDatabaseById,
        updateInstanceInDatabase,
        deleteFromDatabasebyId
    } = require('./db.js')

//Check for valid Id
minionsRouter.param('id', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        req.minion = (minion);
        next();
    } else {
        res.status(404).send('Minion not found.');
    }

});


//GET all minions
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

//POST a new Minion
minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

//GET a single minion by Id
minionsRouter.get('/:id', (req, res, next) => {
    res.send(req.minion);
});

//PUT - Update a single minion by Id
minionsRouter.put('/:id', (req, res, next) => {
    updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinion);
});

//DELETE a minion by Id
minionsRouter.delete('/:id', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('minions', req.id);
        if (deleted) {
            res.status(204);
        } else {
            res.status(500);
        }
    res.send()
});


module.exports = minionsRouter;