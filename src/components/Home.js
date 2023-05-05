// import React from 'react'
// import { Link } from 'react-router-dom'
// const brlWhiteLogo = "/assets/brlWhiteLogo.png"

// const Home = () => {
//   return (
//     <section className='bg-blue-500 h-screen'>
//         <h2 className='text-4xl text-white pb-4 w-fit mx-auto pt-6'>Blockverse 2.0 Schemas</h2>
//         <article className='flex flex-wrap mx-auto gap-8 w-fit pt-12 justify-center'>
//             <div className='border w-fit p-8'>
//                 <Link to={'/blockverse'}>
//                     <img className='w-36' src={brlWhiteLogo} alt="" />
//                     <h2 className='text-xl text-white w-fit mx-auto pt-4'>Schema 1</h2>
//                 </Link>
//             </div>
//             <div className='border w-fit p-8'>
//                 <Link to={'/blockverse'}>
//                     <img className='w-36' src={brlWhiteLogo} alt="" />
//                     <h2 className='text-xl text-white w-fit mx-auto pt-4'>Schema 2</h2>
//                 </Link>
//             </div>
//             <div className='border w-fit p-8'>
//                 <Link to={'/blockverse'}>
//                     <img className='w-36' src={brlWhiteLogo} alt="" />
//                     <h2 className='text-xl text-white w-fit mx-auto pt-4'>Schema 3</h2>
//                 </Link>
//             </div>
//             <div className='border w-fit p-8'>
//                 <Link to={'/blockverse'}>
//                     <img className='w-36' src={brlWhiteLogo} alt="" />
//                     <h2 className='text-xl text-white w-fit mx-auto pt-4'>Schema 4</h2>
//                 </Link>
//             </div>
//         </article>
//     </section>
//   )
// }

// export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const brlWhiteLogo = "/assets/brlWhiteLogo.png"

const Home = () => {
  const schemas = [
    { id: 1, name: 'Schema 1' },
    { id: 2, name: 'Schema 2' },
    { id: 3, name: 'Schema 3' },
    { id: 4, name: 'Schema 4' },
  ];

  const handleClick = (id) => {
    console.log(`Schema ${id} clicked`);
    let schema = {id}
    axios.post('http://43.206.130.198/schema_selection/', { schema })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
  };

  return (
    <section className='bg-blue-500 h-screen'>
      <h2 className='text-4xl text-white pb-4 w-fit mx-auto pt-6'>
        Blockverse 2.0 Schemas
      </h2>
      <article className='flex flex-wrap mx-auto gap-8 w-fit pt-12 justify-center'>
        {schemas.map(schema => (
          <div key={schema.id} className='border w-fit p-8'>
            <Link to={'/blockverse'}>
              <img className='w-36' src={brlWhiteLogo} alt='' />
              <h2 className='text-xl text-white w-fit mx-auto pt-4'>
                {schema.name}
              </h2>
              <button onClick={() => handleClick(schema.id)} className='text-white'>Select Schema</button>
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Home;
