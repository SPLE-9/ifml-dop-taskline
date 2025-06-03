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
import saveTask from '../services/saveTask'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormCreateTask = ({ 
	projectListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const create = (data) => {
    const cleanData = cleanFormData(data)
    saveTask({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/task`)
  	notifySuccess(`Save Task berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Create Task" 
		  onSubmit={handleSubmit(create)}
	
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
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="projectId"
	        name="projectId"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Project"
	          options={projectListData}
	          optionKey="projectId"
	          optionLabel="title"
	          placeholder="Masukkan project"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_IrpAkCHuEfCEXJqvmcK_5Q" key="Create" type="submit" variant="primary">Create</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormCreateTask
