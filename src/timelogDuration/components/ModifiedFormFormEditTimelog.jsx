/*
	Generated on 03/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Modal,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateTimelogDuration from '../services/updateTimelogDuration'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormEditTimelog = ({ 
	editTimelogData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: editTimelogData })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateTimelogDuration({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`null`)
  	notifySuccess(`Update TimelogDuration berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form Edit Timelog" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
	      <VisualizationAttr
	        label="Task Title"
	        content={editTimelogData?.title}
	        
	      />
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="timelogNotes"
	        name="timelogNotes"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Notes"
	          placeholder="Masukkan notes"
	          defaultValue={editTimelogData.timelogNotes}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="timelogDate"
	        name="timelogDate"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Date"
	          placeholder="Masukkan date"
	          type="date"
	          defaultValue={editTimelogData.timelogDate}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="timelogDuration"
	        name="timelogDuration"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Duration"
	          placeholder="Masukkan duration"
	          defaultValue={editTimelogData.timelogDuration}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_uYvRsD9_EfCoR4uVzNNXig" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormFormEditTimelog
