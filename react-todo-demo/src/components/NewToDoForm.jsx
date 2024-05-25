import React from 'react'

const NewToDoForm = () => {
  return (
    <div className='mt-5'>
        <form>
            <div className="mb-3">
                <label htmlFor="assigned"  className="form-label">Assigned</label> 
                <input type="text" className="form-control" required id="assigned"/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description </label>
                <textarea  className="form-control" id="description" rows={3}/>
            </div>
            <button className='btn btn-primary' type="button">Add To Do</button>
        </form>

    </div>
  )
}

export default NewToDoForm