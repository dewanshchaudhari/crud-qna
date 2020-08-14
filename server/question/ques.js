const express = require('express');
const router = express.Router();
const db = require('monk')('localhost/mydb');
const ques = db.get('ques');
const Joi = require('joi');
const schema = Joi.object({
    question: Joi.string().required().trim(),
    answer: Joi.string().trim()
})
router.get('/', async (req, res, next) => {
    try {
        const items = await ques.find({});
        res.json(items);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const item = await ques.findOne({
            _id: id
        });
        if (!item) return next();
        res.json(item);
    } catch (error) {
        next(error);
    }

});

router.post('/', async (req, res, next) => {
    try {
        const que = await schema.validateAsync(req.body);
        const inserted = await ques.insert(que);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const que = await schema.validateAsync(req.body);
        const item = await ques.findOne({
            _id: id
        });
        if (!item) return next();
        await ques.update({
            _id: id
        }, {
            $set: que
        });
        res.json(que);
    } catch (error) {
        next(error);

    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        ques.remove({
            _id: id
        });
        res.json({
            message: 'SUCCESS'
        });
    } catch (error) {
        next(error);
    }
});










module.exports = router;