/*
	Generated on 03/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import deleteTask from '../services/deleteTask'

import * as Layouts from "@/commons/layouts";

const TaskDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const edit = async () => {
      navigate(
        '/task/edit?'
        + `taskId=${data.taskId}`
        
      );
    };

    const [showModalConfirmDeleteTask, setShowModalConfirmDeleteTask] = React.useState(false);

    const confirmDelete = async () => {
      await deleteTask({
        taskId: data.taskId,
      });
      navigate('/task');
    };
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "title",
                  condition: "",
                  label: "Title",
                  featureName: "title",
                }
        ,        {
                  id: "description",
                  condition: "",
                  label: "Description",
                  featureName: "description",
                }
        ,        {
                  id: "status",
                  condition: "",
                  label: "Status",
                  featureName: "status",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_iw7UsCdPEfCHbe1wpsqx6g"
            variant="secondary"
            onClick={() => edit()}
          >
            Edit
          </Button>
          ,
          <Button
            id="_3pUzQCHmEfChD41pi9QTAQ"
            variant="secondary"
            onClick={() => setShowModalConfirmDeleteTask(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
            isShow={showModalConfirmDeleteTask}
            title={"Confirm Delete Task"}
        >
            <Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmDeleteTask(false)}>Batal</Button></Link>
          <Button
            id="_n1yzoCHnEfChD41pi9QTAQ"
            variant="secondary"
            onClick={() => confirmDelete()}
          >
            Confirm Delete
          </Button>
        </Modal>,
      ]}
    />
  );
};

export default TaskDetail;
