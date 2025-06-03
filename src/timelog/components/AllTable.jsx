/*
	Generated on 03/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const AllTable = ({ tableAllTimelog,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[tableAllTimelog]}
  	  itemsAttrs={[
          {
            id: "date",
            condition: "",
            label: "Date",
            featureName: "timelogDate",
            editable: false
          }
  ,        {
            id: "taskTitle",
            condition: "",
            label: "Task Title",
            featureName: "taskTitle",
            editable: false
          }
  ,        {
            id: "userName",
            condition: "",
            label: "User Name",
            featureName: "memberName",
            editable: false
          }
  ,        {
            id: "note",
            condition: "",
            label: "Note",
            featureName: "timelogNotes",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default AllTable;
