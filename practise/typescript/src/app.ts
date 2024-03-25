// const express = require('express');
import express from 'express';
// enables this front end syntax in ts
import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());
app.use(todosRoutes);

app.listen({ port: 3000 });

// $ npm install --save-dev @types/node
// $ npm install --save-dev @types/express