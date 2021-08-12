const db = require('../models/statusModels');

const statusController = {};

statusController.getStatusCodes = (req, res, next) => {
    const quertStr = 'SELECT * FROM status_code;';

    db.query(quertStr)
    .then(results => {
        res.locals.status_codes = results.rows;
        return next();
    })
    .catch(err => next({
        log: 'ERROR: Error getting people, species, and homeworlds in statusController.getStatusCodes middleware',
        message: { err: 'statusController.getStatusCodes: ERROR: Check server logs for details' }
    }))
}

statusController.addStatusCode = (req, res, next) => {
    const newStatusCode = [parseInt(req.body.status), req.body.description, req.body.img_url];
    const queryStr = 'INSERT INTO status_code (status, description, img_url) VALUES ($1, $2, $3) RETURNING *';
    db.query(queryStr, newStatusCode)
      .then(results => {
        res.locals.status_code = results.rows[0];
        next();
      })
      .catch((err) => next({
        log: 'ERROR: Error inserting new character in statusController.addStatusCode middleware',
        message: { err: 'statusController.addStatusCode: ERROR: Check server logs for details' }
      }));
};

statusController.deleteStatusCode = (req, res, next) => {
  // console.log(typeof req.params.id, '...req.body ...')
  const status_id = [parseInt(req.params.id)];
  const queryStr = 'DELETE FROM status_code WHERE id = $1 RETURNING *';
  db.query(queryStr, status_id)
    .then(results => {
      res.locals.status_code = results.rows[0];
      next();
    })
    .catch((err) => next({
      log: 'ERROR: Error inserting new character in statusController.deleteStatusCode middleware',
      message: { err: 'statusController.deleteStatusCode: ERROR: Check server logs for details' }
    }));
};

module.exports = statusController;
