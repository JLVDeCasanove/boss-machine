const express = require('express');
const ideasRouter = express.Router();
const {
    getAllFromDatabase,
        addToDatabase,
        getFromDatabaseById,
        updateInstanceInDatabase,
        deleteFromDatabasebyId
} = require('./db.js')

//Check for valid id
ideasRouter.param('id', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = (idea);
        next();
    } else {
        res.status(404).send('Idea not found.');
    }

});

//GET all ideas
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

//POST a new idea
ideasRouter.post('/', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
});


//GET a single idea by id
ideasRouter.get('/:id', (req, res, next) => {
    res.send(req.idea)
});

//PUT - update an idea by id
ideasRouter.put('/:id', (req, res, next) => {
    updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea);
});

//DELETE an idea by id
ideasRouter.delete('/:id', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('ideas', req.id);
        if (deleted) {
            res.status(204);
        } else {
            res.status(500);
        }
    res.send()
});

module.exports = ideasRouter;