// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import './App.css'
// import { NewNote } from './components/NewNote';
// import { useLocalStorage } from './useLocalStorage';
// import { useMemo } from 'react';
// import { v4 as uuidV4 } from 'uuid';
// import { NoteList } from './components/NoteList';
// import { NoteLayout } from './components/NoteLayout';
// import { Note } from './components/Note';
// import { EditNote } from './components/EditNote';

// // a new type that is notedata with added id as parameter
// export type Note = {
//   id: string
// } & NoteData


// export type RawNote = {
//   id: string,
// } & RawNoteData

// export type RawNoteData = {
//   title: string
//   markdown: string
//   tagIds: string[]
// }

// export type NoteData = {
//   title: string
//   markdown: string
//   tags: Tag[]
// }
// export type Tag = {
//   id: string,
//   label: string
// }

// function App() {

//   // instead os using state use local storage to keep info persistent
//   const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
//   const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);


//   // loop through all notes, and for each one keep all the note info and get tags with associated id inside
//   // of our notes being stored and only run when notes/tags are being updated
//   const notesWithTags = useMemo(() => {
//     return notes.map(note => {
//       return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
//     })
//   }, [notes, tags]);


//   // save into notes array in local storage
//   function onCreateNote({ tags, ...data }: NoteData) {
//     console.log('made it inside onCreateNote fn when manutally go to /new and save button')
//     setNotes(prevNotes => {
//       return [
//         ...prevNotes,
//         { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
      
//       ]
//     })
//   }

//   function onUpdateNote(id: string, {tags, ...data}: NoteData) {
//     setNotes(prevNotes => {
//       return prevNotes.map((note) => {
//         if (note.id === id) {
//           return { ...note, ...data, tagIds: tags.map(tag => tag.id) }
//         } else {
//           return note;
//         }
//       })
//     })
//   }

//   function addTag(tag: Tag) {
//     setTags(prev => [...prev, tag])
//   }

//   function onDeleteNote(id: string) {
//     console.log('you hitting this on deletenote')
//     setNotes(prevNotes => {
//       return prevNotes.filter((note) => note.id !== id)
//     })
//   }

//   function updateTag(id: string, label: string) {
//     setTags(prevTags => {
//       return prevTags.map((tag) => {
//         if (tag.id === id) {
//           return { ...tag, label }
//         } else {
//           return tag;
//         }
//       })
//     })
//   }

//   function deleteTag(id: string) {
//     setTags(prevTags => {
//       return prevTags.filter((tag) => tag.id !== id)
//     })
//   }

//   return (
//     <Container className="my-4">
//       <Routes>
//         <Route path='/' element={<h1><NoteList
//           notes={notesWithTags}
//           availableTags={tags}
//           updateTag={updateTag}
//           deleteTag={deleteTag}
//         /></h1>} />
//         <Route path='/new' element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags} />} />
//         <Route path='/:id' element={<NoteLayout notes={notesWithTags } />}>
//           {/*  ...edit/1 etc */}
//           <Route index element={<h1><Note onDeleteNote={onDeleteNote} /></h1>} />
//           <Route path='edit' element={<h1><EditNote onSubmit={onUpdateNote} onAddTag={addTag} availableTags={tags}/></h1>}/> 
//         </Route>
//         <Route path='*' element={<Navigate to='/'/>}></Route>
//       </Routes>
//     </Container>
//   )
// }

// export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { NewNote } from './components/NewNote';
import { useLocalStorage } from './useLocalStorage';
import { useMemo } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { NoteList } from './components/NoteList';
import { NoteLayout } from './components/NoteLayout';
import { Note } from './components/Note';
import { EditNote } from './components/EditNote';

// a new type that is notedata with added id as parameter
export type Note = {
  id: string
} & NoteData


export type RawNote = {
  id: string,
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}
export type Tag = {
  id: string,
  label: string
}

function App() {

  // instead os using state use local storage to keep info persistent
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);


  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('http://localhost:8080/notes');
      const data = await response.json();
      if (response.ok) {
        setNotes(data)
      }
    }
    fetchNotes();
  }, [])

  // loop through all notes, and for each one keep all the note info and get tags with associated id inside
  // of our notes being stored and only run when notes/tags are being updated
  const notesWithTags = useMemo(() => {
    if (notes) {
      console.log('notes', notes)
      return notes.map(note => {
        return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }

      });
    } else {
      console.log('did not get notes in time (log)');
      return [];
    }
  }, [notes, tags]);
  


  // save into notes array in local storage
  function onCreateNote({ tags, ...data }: NoteData) {
    console.log('made it inside onCreateNote fn when manutally go to /new and save button')
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
      
      ]
    })
  }

  function onUpdateNote(id: string, {tags, ...data}: NoteData) {
    setNotes(prevNotes => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map(tag => tag.id) }
        } else {
          return note;
        }
      })
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }

  function onDeleteNote(id: string) {
    console.log('you hitting this on deletenote')
    setNotes(prevNotes => {
      return prevNotes.filter((note) => note.id !== id)
    })
  }

  function updateTag(id: string, label: string) {
    setTags(prevTags => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag;
        }
      })
    })
  }

  function deleteTag(id: string) {
    setTags(prevTags => {
      return prevTags.filter((tag) => tag.id !== id)
    })
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route path='/' element={<h1><NoteList
          notes={notesWithTags}
          availableTags={tags}
          updateTag={updateTag}
          deleteTag={deleteTag}
        /></h1>} />
        <Route path='/new' element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags} />} />
        <Route path='/:id' element={<NoteLayout notes={notesWithTags } />}>
          {/*  ...edit/1 etc */}
          <Route index element={<h1><Note onDeleteNote={onDeleteNote} /></h1>} />
          <Route path='edit' element={<h1><EditNote onSubmit={onUpdateNote} onAddTag={addTag} availableTags={tags}/></h1>}/> 
        </Route>
        <Route path='*' element={<Navigate to='/'/>}></Route>
      </Routes>
    </Container>
  )
}

export default App
