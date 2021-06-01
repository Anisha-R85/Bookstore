const express = require('express');
const bookController = require('../controllers/bookController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = express.Router();





router.get('/create',requireAuth, bookController.book_create_get);

router.get('/', bookController.book_index);

router.post('/',bookController.book_create_post);


router.get('/:id', requireAuth, bookController.book_details);

router.delete('/:id', bookController.book_delete);

router.put('/:id', bookController.book_update);

module.exports = router;