/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
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
import updateTask from '../services/updateTask'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditTask = ({ 
	taskData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: taskData })
  
  
  
  
  const navigate = useNavigate()
  
  const edit = (data) => {
    const cleanData = cleanFormData(data)
    updateTask({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/task/${taskData.taskId}`)
  	notifySuccess(`Update Task berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Task" 
		  onSubmit={handleSubmit(edit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="title"
	        name="title"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Title"
	          placeholder="Masukkan title"
	          defaultValue={taskData.title}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="description"
	        name="description"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Description"
	          placeholder="Masukkan description"
	          defaultValue={taskData.description}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_7QwBYCHwEfCEXJqvmcK_5Q" key="Edit" type="submit" variant="primary">Edit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditTask
