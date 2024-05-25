import React, {useState} from 'react'
import uuid from 'react-uuid';
import { useDebouncedCallback } from 'use-debounce';

const NewToDoForm = (props) => {
    const formInitialData = {
        rowNumber : 0,
        rowDescription : "",
        rowAssigned : ""
    };
    
    const initFormErrorMsgs = {
        rowDescriptionErrMsg : "",
        rowAssignedErrMsg : "",        
    };

    const [formData, setFormData] = useState(formInitialData);
    const [formErrorMsg, setFormErrMsg] = useState(initFormErrorMsgs);
    const [didFormSubmit, setDidFormSubmit] = useState(false);
    const [validFormStatus, setValidFormStatus] = useState(false);

    const onChangeInput = (e) => {

        setFormData({...formData, [e.target.id] : e.target.value});


        if(didFormSubmit){
            checkFormValidation();
        }
        
    }

   

    

    const checkFormValidation = () => {
        
            if(formData.rowAssigned == ""){
                formErrorMsg.rowAssignedErrMsg = "Assigned is mssing";
                setFormErrMsg(formErrorMsg);
                setValidFormStatus(false);
                console.log("row assigned value is missing", validFormStatus);
            }
            else{
                formErrorMsg.rowAssignedErrMsg = "";
                setFormErrMsg(formErrorMsg);                
                setValidFormStatus(true);
            }

            if(formData.rowDescription == ""){
                formErrorMsg.rowDescriptionErrMsg = "Description is missing!";
                setFormErrMsg(formErrorMsg);
                setValidFormStatus(false);
            }
            else if(formData.rowDescription.length <= 5 ){
                formErrorMsg.rowDescriptionErrMsg = "Description should be at least 5 characters";
                setFormErrMsg(formErrorMsg);
                setValidFormStatus(false);
            }
            else{
                formErrorMsg.rowDescriptionErrMsg = "";
                setFormErrMsg(formErrorMsg);
                setValidFormStatus(true);
            }
       

        console.log(formErrorMsg);
        console.log("valid form",validFormStatus);
    }

    const onClickAddToDo = (e) => {
        e.preventDefault();       
        
        checkFormValidation();
        setTimeout(setDidFormSubmit(true), 1000);

        

        if(validFormStatus){
            formData.rowNumber = uuid();            
            props.fnAddToDo(formData);
            setFormData(formInitialData);
            setFormErrMsg(initFormErrorMsgs);
            setValidFormStatus(false);
            setDidFormSubmit(false);
        }
        console.log(formData);

        
        
    }

  return (
    <div className='mt-5'>
        <form>
            <div className="mb-3">
                <label htmlFor="assigned"  className="form-label" >Assigned</label> 
                <input type="text" className="form-control" required id="rowAssigned" name="rowAssigned" onChange={onChangeInput} value={formData.rowAssigned}/>
                <small className='text-danger'>{formErrorMsg.rowAssignedErrMsg}</small>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description </label>
                <textarea  className="form-control" id="rowDescription" name="rowDescription" rows={3} onChange={onChangeInput} value={formData.rowDescription}/>
                <small className='text-danger'>{formErrorMsg.rowDescriptionErrMsg}</small>
            </div>
            <button className='btn btn-primary' type="button" onClick={onClickAddToDo}>Add To Do</button>
        </form>

    </div>
  )
}

export default NewToDoForm