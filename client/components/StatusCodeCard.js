import React from 'react';

const StatusCodeCard = ({ status_code, setShowDeleteMsg }) => {
    const { id, status, description, img_url } = status_code;

    return (
      <section>
        <button className="delete-button" onClick={() => setShowDeleteMsg(status_code)}>x</button>
        <div className="image-wrapper">
          <img src={img_url} alt={`${status} image`}/>
        </div>
        <div className="status_details">
          <p>{status}</p>
          <p>{description}</p>
        </div>
      </section>
    )
};

export default StatusCodeCard;