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
import updateComment from '../services/updateComment'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const AddedFormEditComment = ({ 
	commentData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: commentData })
  
  const { taskId, commentId } = useParams()
  
  
  const navigate = useNavigate()
  
  const edit = (data) => {
    const cleanData = cleanFormData(data)
    updateComment({
      ...cleanData,
      commentId,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Update Comment berhasil!`);
    navigate(`/task/${taskId}`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Comment" 
		  onSubmit={handleSubmit(edit)}
	
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
	          defaultValue={commentData.content}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_NMhEwD98EfCoR4uVzNNXig" key="Edit" type="submit" variant="primary">Edit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default AddedFormEditComment
