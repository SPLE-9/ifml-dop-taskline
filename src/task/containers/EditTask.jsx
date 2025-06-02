/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditTask from '../components/FormEditTask'
import getTaskData from '../services/getTaskData'

const EditTask = props => {
  const { taskId } = useParams()
  const [isLoading, setIsLoading] = useState({
	editTask: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Task")
  }, []);


const [taskData, setTaskData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editTask: true}))
      const { data: taskDataResponse } = await getTaskData({ taskId  })

	  setTaskData(taskDataResponse.data)
	  setIsLoading(prev => ({...prev, editTask: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Task"}
		isLoading={isLoading.editTask}
	>
		{taskData ? 
		(<>
		 <FormEditTask
			{...{ 
				taskData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditTask

