import { Col, Row, Stack, Button, Form, Card, Badge, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactSelect  from 'react-select';
import { useState, useMemo } from 'react';
import { Tag, Note } from '../App';
import styles from './NoteList.module.css';

type NoteListProps = {
  availableTags: Tag[]
  notes: Note[]
  updateTag: (id: string, label:string) => void
  deleteTag: (id: string) => void
}

type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}

type EditTagsModalProps = {
  show: boolean,
  handleClose: () => void
  availableTags: Tag[]
  updateTag: (id: string, label:string) => void
  deleteTag: (id: string) => void
}

export function NoteList({ availableTags, notes, updateTag, deleteTag }: NoteListProps) {
  
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState('');
  const [editTagsModalIsOpen, setEditTagsModalIsOpen] = useState(false);

  const filteredNotes = useMemo(() => {
    return notes.filter(note => {
      return (
         (title === '' ||
          note.title.toLowerCase().includes(title.toLowerCase()))
       &&
        (selectedTags.length === 0 ||
        // loop through every selected tag and make sure every one returns true for statement below
        // which says check our note to see if it contains the statement we are looking for
          // so below line is checking to make sure our note has all the tags we are searching for
          selectedTags.every(tag =>
            note.tags.some(noteTag => noteTag.id === tag.id)
          ))
      )
    })
  }, [title, selectedTags, notes])

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to='/new'>
              <Button
                variant="primary">Create</Button>
              </Link>
              <Button
                variant="outline-secondary"
                onClick={() => setEditTagsModalIsOpen(true)}
            >Edit Tags
            </Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4"></Row>
        <Col>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                return {label: tag.label, value: tag.id}
                })}
                options={availableTags.map(tag => {return {label: tag.label, value: tag.id}})}
                onChange={tags => {
                  setSelectedTags(tags.map(tag => {
                    return { label: tag.label, id: tag.value}
                  }))
                }}
                isMulti />
            </Form.Group>
        </Col>
      </Form>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredNotes.map(note => (
          <Col key={note.id}>
            <NoteCard id={note.id} title={note.title } tags ={note.tags} />
          </Col>
        ))}
      </Row>
      <EditTagsModal
        show={editTagsModalIsOpen }
        handleClose={() => { setEditTagsModalIsOpen(false)}}
        availableTags={availableTags}
        updateTag={updateTag}
        deleteTag={deleteTag}
      >
        </EditTagsModal>
      </>
  )
}

function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Card as={Link} to={`/${id}`} className={`h-100 text-reset text-decoration-none ${styles.card}`}>
      <Card.Body>
        <Stack gap={2} className="align-items-center justify-content-center h-100">
          <span className="fs-5">
            {title}
            {tags.length > 0 && (
              <Stack gap={1} direction="horizontal"
                className="justify-content-center flex-wrap">
                {tags.map(tag => (
                  <Badge className="text-truncate" key={tag.id}>
                    {tag.label}
                  </Badge>
                ))}
              </Stack>
            )}
          </span>
        </Stack>
    </Card.Body>
    </Card>
  )
}

function EditTagsModal({availableTags, handleClose, show, updateTag, deleteTag}: EditTagsModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Edit Tags
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={(e) => {updateTag(tag.id, e.target.value)}}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    onClick={() => {deleteTag(tag.id)}}
                    variant='outline-danger'
                  >&times;</Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}