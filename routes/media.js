const express = require('express');
const router = express.Router();
const mediaHandler = require('./handler/media');
/* GET users listing. */
router.post('/', mediaHandler.create); 
router.get('/', mediaHandler.get);
router.delete('/:id', mediaHandler.deleteFile);

module.exports = router;
