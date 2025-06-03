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
import saveComment from '../services/saveComment'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const AddedFormCreateComment = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues:  })
  
  
  
  
  const navigate = useNavigate()
  
  const tambahkan = (data) => {
    const cleanData = cleanFormData(data)
    saveComment({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(``)
  	notifySuccess(`Save Comment berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Create Comment" 
		  onSubmit={handleSubmit(tambahkan)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="content"
	        name="content"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Content"
	          placeholder="Masukkan content"
	          defaultValue={.content}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_9H4ooDP4EfClXe1W-QDabQ" key="Tambahkan" type="submit" variant="primary">Tambahkan</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default AddedFormCreateComment
