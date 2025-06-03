/*
	Generated on 03/06/2025 by UI Generator PRICES-IDE
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
import FormEditProjectForm from '../components/FormEditProjectForm'
import getEditProjectData from '../services/getEditProjectData'

const EditProjectPage = props => {
  const { projectId } = useParams()
  const [isLoading, setIsLoading] = useState({
	editProjectForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Project Page")
  }, []);


const [editProjectData, setEditProjectData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editProjectForm: true}))
      const { data: editProjectDataResponse } = await getEditProjectData({ projectId  })

	  setEditProjectData(editProjectDataResponse.data)
	  setIsLoading(prev => ({...prev, editProjectForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/projects/${projectId}
			  	`}>
			  		<Button id="_h1v1YCHqEfChD41pi9QTAQ" className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Project"}
		isLoading={isLoading.editProjectForm}
	>
		{editProjectData ? 
		(<>
		 <FormEditProjectForm
			{...{ 
				editProjectData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditProjectPage

