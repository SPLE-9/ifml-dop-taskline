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
import FormFormEditTimelog from '../components/FormFormEditTimelog'
import getEditTimelogData from '../services/getEditTimelogData'

const EditTimelogPage = props => {
  const { timelogId } = useParams()
  const [isLoading, setIsLoading] = useState({
	formEditTimelog: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Timelog Page")
  }, []);


const [editTimelogData, setEditTimelogData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, formEditTimelog: true}))
      const { data: editTimelogDataResponse } = await getEditTimelogData({ timelogId  })

	  setEditTimelogData(editTimelogDataResponse.data)
	  setIsLoading(prev => ({...prev, formEditTimelog: false}))
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
		singularName={"Edit"}
		isLoading={isLoading.formEditTimelog}
	>
		{editTimelogData ? 
		(<>
		 <FormFormEditTimelog
			{...{ 
				editTimelogData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditTimelogPage

