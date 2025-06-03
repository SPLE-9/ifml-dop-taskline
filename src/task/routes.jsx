/*
	Generated on 03/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import TableTaskPage from './containers/TableTaskPage'
import CreateTaskPage from './containers/CreateTaskPage'
import EditTask from './containers/EditTask'
import DetailTask from './containers/DetailTask'
import CreateCommentPage from './containers/CreateCommentPage'
import EditCommentPage from './containers/EditCommentPage'

const taskRoutes = [
{ 
    path: "/task",
    element: <TableTaskPage />,
  }	
,
{ 
    path: "/task/create",
    element: <CreateTaskPage />,
  }	
,
{ 
    path: "/task/edit",
    element: <EditTask />,
  }	
,
{ 
    path: "/task/:taskId",
    element: <DetailTask />,
  }	
,
{ 
    path: "/task/:taskId/comment/add",
    element: <CreateCommentPage />,
  }	
,
{ 
    path: "/task/:taskId/comment/edit/:commentId",
    element: <EditCommentPage />,
  }	

]

export default taskRoutes
