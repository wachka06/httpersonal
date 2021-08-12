import React, { useState, useEffect } from 'react';
import Form from './Form';
import StatusCodes from './StatusCodes';
import DeleteMsg from './DeleteMsg';
import logo from '../img/matt_red.png';

const App = () => {
  const [status_codes, setStatus_codes] = useState([]);
  const [form, setForm] = useState({
    status: null,
    description: null,
    img_url: null,
  });
  const [showForm, setShowForm] = useState(false);
  const [showDeleteMsg, setShowDeleteMsg] = useState({});
  // const [deleteId, setDeleteId] = useState(null);
  
  useEffect(() => {
    const getStatusCodes = () => {
      fetch('/api/status_code')
        .then(response => response.json())
        .then(status_codes => setStatus_codes(status_codes))
        .catch(err => console.log('Request Failed: ' + err));
    }
    getStatusCodes();
  }, []);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
      e.preventDefault();

      fetch('/api/status_code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      .then(res => res.json())
      .then(data => {
        console.log('New status code is successfully created: ' + data);
        setShowForm(!showForm);
        window.location.reload(false);
      })
      .catch(err => console.log('Request Failed: ' + err))
  }

  const handleDelete = (id) => {
    fetch('/api/status_code' + `/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      console.log('Status code is successfully deleted: ' + data);
      window.location.reload(false);
    })
    .catch(err => console.log('Request Failed: ' + err))
  }

  return (
      <div>
        <header>
          <img src={logo} alt="Logo" />
          <h1>HTTPersonal</h1>
          <button onClick={() => setShowForm(!showForm)}>+</button>
        </header>
        {
          showDeleteMsg.id &&
          <DeleteMsg
            status_code={showDeleteMsg}
            handleDelete={handleDelete}
            setShowDeleteMsg={setShowDeleteMsg}
          />
        }
        { 
          showForm && 
          <Form 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          /> 
        }
        {
          (!showForm && !showDeleteMsg.id) &&
          <StatusCodes 
            status_codes={status_codes}
            showDeleteMsg={showDeleteMsg}
            setShowDeleteMsg={setShowDeleteMsg}
          />
        }
      </div>
  )
}

export default App;