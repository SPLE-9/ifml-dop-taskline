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
import AddedFormCreateComment from '../components/AddedFormCreateComment'

const CreateCommentPage = props => {
  const { taskId } = useParams()
  const [isLoading, setIsLoading] = useState({
	createComment: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Create Comment Page")
  }, []);


useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, createComment: true}))
	  setIsLoading(prev => ({...prev, createComment: false}))
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
		isLoading={isLoading.createComment}
	>
		<AddedFormCreateComment
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CreateCommentPage

