/*
	Generated on 03/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import TimelogPage from './containers/TimelogPage'
import AddTimelogPage from './containers/AddTimelogPage'
import EditTimelogPage from './containers/EditTimelogPage'

const timelogRoutes = [
{ 
    path: "/timelog",
    element: <TimelogPage />,
  }	
,
{ 
    path: "/timelog/add",
    element: <AddTimelogPage />,
  }	
,
{ 
    path: "/timelog/edit/:timelogId",
    element: <EditTimelogPage />,
  }	

]

export default timelogRoutes
