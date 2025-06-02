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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import TaskDetail from '../components/TaskDetail'
import getTaskDetailData from '../services/getTaskDetailData'
import CommentTable from "../components/CommentTable";
import getCommentData from '../services/getCommentListData'

const DetailTask = props => {
  const { taskId } = useParams()
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	taskDetail: false,
	tableComment: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Task")
  }, []);


const [taskDetailData, setTaskDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, taskDetail: true}))
				const { data: taskDetailData } = await getTaskDetailData({ taskId })
				setTaskDetailData(taskDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, taskDetail: false}))
			}
		}
		fetchData()
	}, [])
const [commentData, setCommentData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableComment: true}))
				const { data: commentData } = await getCommentData({ taskId })
				setCommentData(commentData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableComment: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/task/${taskId}/comment/add
			  	`}>
			  		<Button id="_9foPsDP3EfClXe1W-QDabQ" className="p-2" variant="primary">
			  		  Tambahkan Komentar
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Task Detail"}
	singularName={"Detail"}
	items={{...taskDetailData}}
	isLoading={isLoading.taskDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<TaskDetail {...{ data : { ...taskDetailData }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Table Comment"}
	singularName={"Comment"}
	items={[commentData]}
	isLoading={isLoading.tableComment}
>
	<CommentTable
		commentData={commentData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailTask

