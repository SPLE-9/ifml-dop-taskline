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

import ProjectDetail from '../components/ProjectDetail'
import getProjectDetailData from '../services/getProjectDetailData'

const ProjectDetailPage = props => {
  const { projectId } = useParams()
  const [isLoading, setIsLoading] = useState({
	projectDetail: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Project Detail Page")
  }, []);


const [projectDetailData, setProjectDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, projectDetail: true}))
				const { data: projectDetailData } = await getProjectDetailData({ projectId })
				setProjectDetailData(projectDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, projectDetail: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/projects
			  	`}>
			  		<Button id="_cV_oICHqEfChD41pi9QTAQ" className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Project Detail"}
	singularName={"Detail"}
	items={{...projectDetailData}}
	isLoading={isLoading.projectDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<ProjectDetail {...{ data : { ...projectDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProjectDetailPage

