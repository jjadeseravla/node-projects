import { Note } from '../App';
import { useParams, Navigate, Outlet } from 'react-router-dom';

type NoteLayoutProps = {
  notes: Note[]
}

export function NoteLayout({ notes }: NoteLayoutProps) {
  // to get is from url 
  const { id } = useParams();
  const note = notes.find(n => n.id === id);
  if (note === null) return <Navigate to='/' replace />
  
  return <Outlet context={note}/>
}
