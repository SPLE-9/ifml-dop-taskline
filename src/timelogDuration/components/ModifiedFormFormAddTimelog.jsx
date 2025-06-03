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
import saveTimelogDuration from '../services/saveTimelogDuration'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormAddTimelog = ({ 
	taskListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const addTimelog = (data) => {
    const cleanData = cleanFormData(data)
    saveTimelogDuration({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Save TimelogDuration berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form Add Timelog" 
		  onSubmit={handleSubmit()}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="timelogDate"
	        name="timelogDate"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Date"
	          placeholder="Masukkan date"
	          type="date"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="timelogNotes"
	        name="timelogNotes"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Notes"
	          placeholder="Masukkan notes"
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
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="taskId"
	        name="taskId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Task"
	          options={taskListData}
	          optionKey="taskId"
	          optionLabel="title"
	          placeholder="Masukkan task"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_xZ58oD9_EfCoR4uVzNNXig" key="Add Timelog" >Add Timelog</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormFormAddTimelog
