const express = require('express');
const { getAllFromDatabase,
        createMeeting,
        deleteAllFromDatabase,
        addToDatabase
    } = require('./db');
const meetingsRouter = express.Router();

//GET all meetings
meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

//POST a new meeting
meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});

//DELETE a meeting
meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
});


module.exports = meetingsRouter;