import React from 'react'
import { FaTrash } from 'react-icons/fa'


function Task({ handleDelete, name, id, handleUpdate, status }) {
    return (
        <div className="task" >
            <p style={{ textDecoration: status ? 'line-through' : 'none' }} key={id}>{name}</p>
            <button onClick={() => handleDelete(id)}><FaTrash /></button>
            <button onClick={() => handleUpdate(id)}>Complete</button>

        </div>
    )
}

export default Task