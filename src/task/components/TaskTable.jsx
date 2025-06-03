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
import { isMobile } from '@/commons/utils/responsive';

import deleteTask from '../services/deleteTask'
import * as Layouts from "@/commons/layouts";
const TaskTable = ({ taskListData,
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedConfirmDeleteTask, setSelectedConfirmDeleteTask] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (taskItem) => {
    isMobile() && navigate(`/task/${taskItem.taskId}`
    );
  };
  const [showModalConfirmDeleteTask, setShowModalConfirmDeleteTask] = React.useState(false);
  
  const confirmDelete = async (selectedConfirmDeleteTask) => {
      await deleteTask({
      });
  		navigate('/task');
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[taskListData]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "title",
            condition: "",
            label: "Title",
            featureName: "title",
            editable: false
          }
  ,        {
            id: "status",
            condition: "",
            label: "Status",
            featureName: "status",
            editable: false
          }
  ]}
        itemsEvents={(taskItem) => [
          <Link to=''>
            <Button
              id="_XkeOUCH0EfCEXJqvmcK_5Q"
              size="sm"
              variant=
                          "secondary"
            >
              Delete
            </Button>
          </Link>
  ,
          <Link to={`/task/${taskItem.taskId}`}>
    <Button
      id="_6wx1gCdOEfCHbe1wpsqx6g"
      size="sm"
      variant=
          "primary"
    >
      Detail
    </Button>
  </Link>
        ]}
  	/>
  		
  </>
  )
};

export default TaskTable;
