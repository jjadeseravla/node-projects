import express from 'express';
const { createNote, getNoteById } = require('../db/notes');

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { id, title, markdown, tags } = req.body;

    if (!id || !title) {
      return res.sendStatus(400);
    }
    const existingNote = await getNoteById(id);
    if (existingNote) {
      return res.sendStatus(400);
    }

    const note = await createNote({
      id,
      title,
      markdown,
      tags
    });
    return res.status(200).json(note).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
}