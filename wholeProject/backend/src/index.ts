import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from '../router';
// const express = require('express');
// const http = require('http');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const compression = require('compression');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const router = require('../router');

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('server running on http://localhost:8080/')
});

const MONGO_URL = 'mongodb+srv://jade:Guitar12@cluster0.y3fzp4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router())