/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import DetailTask from './containers/DetailTask'
import CreateCommentPage from './containers/CreateCommentPage'
import EditCommentPage from './containers/EditCommentPage'

const taskWithCommentRoutes = [
{ 
    path: "",
    element: <DetailTask />,
  }	
,
{ 
    path: "/comment/add",
    element: <CreateCommentPage />,
  }	
,
{ 
    path: "/comment/edit/:commentId",
    element: <EditCommentPage />,
  }	

]

export default taskWithCommentRoutes
