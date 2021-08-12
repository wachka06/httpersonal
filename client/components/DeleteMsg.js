import React from 'react';
import matt from '../img/matt_not_red.png';

const DeleteMsg = ({ status_code, handleDelete, setShowDeleteMsg }) => {
    const { id, status, description, img_url } = status_code;
    return (
          <div className="delete-message">
              <img src={matt} alt="Do_you_want_to_delete_image" />
              <p>Do you really want to delete this status code?</p>
              <p>Status code:  {status}</p>
              <p>Description:  {description}</p>
              {/* <p></p> */}
              <button onClick={() => handleDelete(id)}>Yes</button>
              <button onClick={() => setShowDeleteMsg({})}>No</button>
          </div>
    )
};

export default DeleteMsg;