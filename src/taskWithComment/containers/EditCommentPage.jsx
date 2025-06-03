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
import AddedFormEditComment from '../components/AddedFormEditComment'
import getCommentData from '../services/getCommentData'

const EditCommentPage = props => {
  const { commentId, taskId } = useParams()
  const [isLoading, setIsLoading] = useState({
	editComment: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Comment Page")
  }, []);


const [commentData, setCommentData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editComment: true}))
      const { data: commentDataResponse } = await getCommentData({ commentId  })

	  setCommentData(commentDataResponse.data)
	  setIsLoading(prev => ({...prev, editComment: false}))
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
		singularName={"Comment"}
		isLoading={isLoading.editComment}
	>
		{commentData ? 
		(<>
		 <AddedFormEditComment
			{...{ 
				commentData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditCommentPage

