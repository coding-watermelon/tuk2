'use strict';

const db = require("../database/dbinterface.js")

module.exports = (app) => {
    app.get('/api/babies', (req, res) => {
      let numberOfEntries = req.query.limit;

        db.getBabies()
          .then( result => {
            res.json({
              result
            })
          })
          .catch( () => {res.stats(500).send() });
    });

}
