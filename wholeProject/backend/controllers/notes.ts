import express from 'express';

import { getNotes, deleteNoteById, updateNoteUsingId, getNoteById } from '../db/notes';

export const getAllNotes = async (req: express.Request, res: express.Response) => {
  try {
    console.log('controllers/getAllNotes');
    const notes = await getNotes();
    return res.status(200).json(notes);
  } catch (e) {
    console.log(e, 'ahhh=----------------------------');
    return res.sendStatus(400);
  }
}

export const deleteNote = async(req: express.Request, res:express.Response) => {
  try {
    const { id } = req.params;
    const deleteThatNote = await deleteNoteById(id);
    return res.status(200).json(deleteThatNote);
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
}

export const updateNote = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { title, markdown, tags } = req.body;
    console.log("Received ID:", id);
    console.log("Received Body:", req.body);

    if (!id) {
      return res.sendStatus(400);
    }

    const note = await getNoteById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

        // Update the note object with new values
    if (title) {
      note.title = title;
    }
    if (markdown) {
      note.markdown = markdown;
    }
    if (tags) {
      note.tags = tags;
    }

    await note.save();
    return res.status(200).json(note).end();
    // const updateThatNote = await updateNoteUsingId(id);
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
}