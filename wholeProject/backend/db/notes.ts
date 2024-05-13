const mongoose = require('mongoose');

// Define the Tag schema
const TagSchema = new mongoose.Schema({
  id: { type: String, required: true },
  label: { type: String, required: true }
});

const NotesSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  markdown: { type: String },
  tags: { type: [TagSchema], required: true } // Array of Tag objects
});

export const NotesModel = mongoose.model('Notes', NotesSchema);
// export const TagModel = mongoose.model('Tag', TagSchema);

export const getNotes = () => NotesModel.find();
export const getNoteById = (id: string) => NotesModel.findOne({ id });
// .findByIf(id)
export const createNote = (values: Record<string, any>) => new NotesModel(values).save();
// .then((note) => note.toObject());
export const deleteNoteById = (id: string) => NotesModel.findOneAndDelete({ _id: id });
export const updateNoteUsingId = (id: string, values: Record<string, any>) => NotesModel.findByIdAndUpdate(id, values);


// {
//   "id": "123",
//   "title": "title",
//   "markdown": "markdown",
//   "tags": [{"id": "4321", "label": "label1"}]
// }