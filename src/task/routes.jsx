/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import TableTaskPage from './containers/TableTaskPage'
import CreateTaskPage from './containers/CreateTaskPage'
import EditTask from './containers/EditTask'
import DetailTask from './containers/DetailTask'

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

]

export default taskRoutes
