const { Router } = require('express');
const { getExample } = require('../controllers/examController');
const router = Router();

router.get('/get-example', getExample);
    
module.exports = router;