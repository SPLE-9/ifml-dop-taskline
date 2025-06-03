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
import CommentTable from "../components/CommentTable";
import getCommentData from '../services/getCommentData'

const DetailTask = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableComment: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Task")
  }, []);


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
			  	<Link to={`/comment/add
			  	`}>
			  		<Button id="_9foPsDP3EfClXe1W-QDabQ" className="p-2" variant="primary">
			  		  Tambahkan Komentar
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
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

