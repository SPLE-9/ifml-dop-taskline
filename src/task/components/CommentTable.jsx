/*
	Generated on 03/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import deleteComment from '../services/deleteComment'
import * as Layouts from "@/commons/layouts";
const CommentTable = ({ commentData,
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedConfirmDeleteComment, setSelectedConfirmDeleteComment] = React.useState(null);
  	const { 	taskId } = useParams();
  const [showModalConfirmDeleteComment, setShowModalConfirmDeleteComment] = React.useState(false);

    const confirmDelete = async (selectedConfirmDeleteComment) => {
      await deleteComment({
        commentId: selectedConfirmDeleteComment.commentId
      });
  		window.location.reload();
    }

  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[commentData]}
  	  itemsAttrs={[
          {
            id: "content",
            condition: "",
            label: "Content",
            featureName: "content",
            editable: false
          }
  ]}
        itemsEvents={(commentItem) => [
          <Link to=''>
            <Button
              id="_wAjJgDP5EfClXe1W-QDabQ"
              size="sm"
              variant=
                          "info"
              onClick={() => {
                  setSelectedConfirmDeleteComment(commentItem);
                  setShowModalConfirmDeleteComment(true);
                }}

            >
              Hapus Komentar
            </Button>
          </Link>
  ,
          <Link to={`/comment/edit/${commentItem.commentId}`}>
    <Button
      id="_emtogDP8EfClXe1W-QDabQ"
      size="sm"
      variant=
          "primary"
    >
      Edit Komentar
    </Button>
  </Link>
        ]}
  	/>

    <Modal
  		isShow={showModalConfirmDeleteComment}
  		title={"Confirm Delete Comment"}
  		>
  		
  				<Link to=''><Button className={`w-full`} variant="tertiary" onClick={() => setShowModalConfirmDeleteComment(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_CJk4EPKWEe-L4bPmfdjtoA"
  		  variant="primary"
  		  onClick={() => confirmDelete(selectedConfirmDeleteComment)}
  		>
  		  Confirm
  		</Button>
  		</Modal>,

  		
  </>
  )
};

export default CommentTable;
