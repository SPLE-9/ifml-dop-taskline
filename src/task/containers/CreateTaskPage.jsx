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
import FormCreateTask from '../components/FormCreateTask'
import getProjectListData from '../services/getProjectListData'

const CreateTaskPage = props => {
  const { invalid } = useParams()
  const [isLoading, setIsLoading] = useState({
	createTask: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Create Task Page")
  }, []);


const [projectListData, setProjectListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, createTask: true}))
      const { data: projectListDataResponse } = await getProjectListData({  })

	  setProjectListData(projectListDataResponse.data)
	  setIsLoading(prev => ({...prev, createTask: false}))
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
		isLoading={isLoading.createTask}
	>
		{projectListData ? 
		(<>
		 <FormCreateTask
			{...{ 
				projectListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CreateTaskPage

