import express from 'express';
import authentication from './authentication';
import notes from './notes';
// const express = require('express');
// const authentication = require('./authentication');

console.log(express, 'express');

const router = express.Router();


export default (): express.Router => {
  authentication(router);
  console.log('router/index');
  notes(router);
  return router;
}