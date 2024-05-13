import express from 'express';

import { getAllNotes, deleteNote, updateNote } from '../controllers/notes';

export default (router: express.Router) => {
  console.log('router/notes');
  router.get('/notes', getAllNotes);
  router.delete('/notes/:id', deleteNote);
  router.patch('/notes/:id', updateNote);
}