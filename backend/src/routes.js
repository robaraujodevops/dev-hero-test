const express = require('express');
const routes = express.Router();
const OngControllers = require('./controllers/OngController');
const IncidentControllers = require('./controllers/IncidentController');
const ProfileControllers = require('./controllers/ProfileController');

routes.get('/ongs',OngControllers.index);
routes.post('/ongs', OngControllers.create);

routes.get('/profile', ProfileControllers.index);

routes.get('/incidents', IncidentControllers.index);
routes.post('/incidents', IncidentControllers.create);
routes.delete('/incidents/:id', IncidentControllers.delete);

module.exports = routes;