import React, {useState} from 'react'
import uuid from 'react-uuid';

const NewToDoForm = (props) => {
    const formInitialData = {
        rowNumber : 0,
        rowDescription : "",
        rowAssigned : ""
    };

    const [formData, setFormData] = useState(formInitialData);

    const onChangeInput = (e) => {

        setFormData({...formData, [e.target.id] : e.target.value});
    }

    const onClickAddToDo = (e) => {
        e.preventDefault();
        formData.rowNumber = uuid();
        console.log(formData);
        props.fnAddToDo(formData);
        setFormData(formInitialData);
        
    }

  return (
    <div className='mt-5'>
        <form>
            <div className="mb-3">
                <label htmlFor="assigned"  className="form-label" >Assigned</label> 
                <input type="text" className="form-control" required id="rowAssigned" name="rowAssigned" onChange={onChangeInput} value={formData.rowAssigned}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description </label>
                <textarea  className="form-control" id="rowDescription" name="rowDescription" rows={3} onChange={onChangeInput} value={formData.rowDescription}/>
            </div>
            <button className='btn btn-primary' type="button" onClick={onClickAddToDo}>Add To Do</button>
        </form>

    </div>
  )
}

export default NewToDoForm