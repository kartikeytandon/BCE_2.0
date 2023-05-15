import React, { useState } from 'react';
import Modal from 'react-modal';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Schema1 = () => {
  const accessToken = Cookies.get('accessToken');
  const schemas = [
    { id: 1, name: 'SCHEMA - 1' },
    { id: 2, name: 'SCHEMA - 2' },
    { id: 3, name: 'SCHEMA - 3' },
  ];

  const handleClick = (id) => {
    console.log(`Schema ${id} clicked`);
    console.log(accessToken);
    let schema = `${id}`
    axios.post('https://blockverseapi.brlakgec.com/schema_selection/', { schema }, {
      headers: {
        Authorization: `Token ${accessToken}`
      }
    })  
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
  };

  const schemaSample = "/assets/schemasample.webp"
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width: '80%',
          height: '90%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 10, 39, 0.82)',
          mixBlendMode: 'normal',
          border: '2px solid #2E003A',
          backdropFilter: 'blur(8.5px)',
          borderRadius: '8px',
        },
      };      

  const [start, setStart] = useState(false)

  const [schemaModal, setSchemaModal] = useState(schemas.reduce((obj, schema) => {
    obj[schema.id] = false;
    return obj;
  }, {}));

  function openModal(id) {
    setSchemaModal({...schemaModal, [id]: true});
  }

  function closeModal(id) {
    setSchemaModal({...schemaModal, [id]: false});
  }

  function startCode(id) {
    setStart(true)
    handleClick(id);
  }

  if(start) {
    return (
        <Navigate to='/blockverse' />
    )
  }

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-center gap-10 lg:gap-32'>
      {schemas.map(schema => (
        <div key={schema.id}>
        <div className='schema w-fit flex flex-col justify-center items-center gap-4 px-8 py-4 rounded-lg'>
          <h1 className='text-xl tracking-wide'>{schema.name}</h1>
          <img src={schemaSample} alt="" className='w-52' />
          <button className='tracking-wide py-2 px-4' onClick={() => openModal(schema.id)}>SELECT</button>
          <Modal
            isOpen={schemaModal[schema.id]}
            onRequestClose={() => closeModal(schema.id)}
            style={customStyles}
            contentLabel="Example Modal"
          > 
            <div>
              <h1 className='text-3xl tracking-wide text-center'>{schema.name}</h1>
              <div id='warning'>
                <p className='text-bold text-xl tracking-wider text-center py-2 mx-4 my-2'>YOU CANNOT REVERT THIS ACTION. CHOOSE WISELY!</p>
              </div>
              <div className='flex justify-center my-8'>
                <img src={schemaSample} alt="" className='w-2/4' />
              </div>
              <div className='flex items-center justify-center gap-8'>
                <button className='tracking-wide py-2 px-4' onClick={() => closeModal(schema.id)}>RETURN</button>
                <button className='tracking-wide py-2 px-4' onClick={() => {
                  startCode(schema.id);
                  // handleClick(schema.id);
                }}>START</button>
              </div>
            </div>
          </Modal>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Schema1