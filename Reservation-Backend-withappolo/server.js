import express from 'express';
import cors from 'cors';
import fs from "fs";
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';

import { schema } from './src/schema';
import reservation from './controllers/reservationController'
require('./db/dbConnection');
require('dotenv').config()


const PORT = process.env.PORT;

const server = express();
server.use('*', cors({ origin: 'http://localhost:3000' }));
// server.use(cors())
/**
 * Cors setting
 */
// server.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

server.get('/reservations', reservation.getAll); //3 & 4
server.get('/hotels', reservation.getAllHotel); //3 & 4
server.get('/reservation/:id', reservation.getById); //1
server.post('/reservation', reservation.create); //2
// catch 404 and forward to error handler
// server.use(function (req, res, next) {
//     // console.log("In error");
//     res.render('index');
//     res.json({ error: err })

//    /*  var err = new Error('Not Found');
//     err.status = 404;
//     next(err); */
// });

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
