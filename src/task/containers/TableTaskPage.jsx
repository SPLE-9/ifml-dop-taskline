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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import TaskTable from "../components/TaskTable";
import getTaskListData from '../services/getTaskListData'

const TableTaskPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableTask: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Task Page")
  }, []);


const [taskListData, setTaskListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableTask: true}))
				const { data: taskListData } = await getTaskListData()
				setTaskListData(taskListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableTask: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/task/create
			  	`}>
			  		<Button id="_xPhpgCHvEfCEXJqvmcK_5Q" className="p-2" variant="primary">
			  		  Buat Task
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Task"}
	singularName={"Task"}
	items={[taskListData]}
	isLoading={isLoading.tableTask}
>
	<TaskTable
		taskListData={taskListData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableTaskPage

