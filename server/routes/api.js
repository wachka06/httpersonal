const express = require('express');

const statusController = require('../controllers/statusController');

const router = express.Router();

router.get('/',
  statusController.getStatusCodes,
  (req, res) => {
      res.set({ 
        'content-type': 'image/png'
       })
      res.status(200).json([...res.locals.status_codes])
    }
);

router.post('/',
  statusController.addStatusCode,
  (req, res) => {
      res.set({ 
        'content-type': 'image/png'
       })
      res.status(200).json({...res.locals.status_code})
    }
);

router.delete('/:id', 
  statusController.deleteStatusCode,
  (req, res) => {
    res.status(200).json({...res.locals.status_code})
  }
);

module.exports = router;