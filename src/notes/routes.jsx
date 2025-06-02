/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import CreateNotes from './containers/CreateNotes'
import NotesPage from './containers/NotesPage'
import EditNotesPage from './containers/EditNotesPage'

const notesRoutes = [
{ 
    path: "/notes/create",
    element: <CreateNotes />,
  }	
,
{ 
    path: "/notes",
    element: <NotesPage />,
  }	
,
{ 
    path: "/notes/edit?notesId",
    element: <EditNotesPage />,
  }	

]

export default notesRoutes
