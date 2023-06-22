const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body;
    ideaValue = Number(numWeeks) * Number(weeklyRevenue);
    if (ideaValue < 1000000 || !numWeeks || !weeklyRevenue ||  isNaN(numWeeks) || isNaN(weeklyRevenue)) {
        res.status(400).send();
    } else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;