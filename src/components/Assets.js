import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Loader from './Loader';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Asset copied to clipboard, you can use it in your code now! Happy Coding 🎉');
    })
    .catch((error) => {
      console.error('Failed to copy link to clipboard:', error);
    });
};

const Assets = () => {
  const [asset, setAsset] = useState([])
  const [ assetLoading, setAssteLoading ] = useState(true)
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    axios.get('https://blockverseapi.brlakgec.com/asset_list/', {
      headers: {  
        Authorization: `Token ${accessToken}`
      }
    })
    .then(response => {
      setAssteLoading(false)
      console.log(response.data.asset_list);
      setAsset(response.data.asset_list)
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  return <>
  {/* <p className='text-bold text-xl tracking-wider text-center py-2 mx-4 my-2 bg-secondary opacity-70 font-inter w-full'>You can copy the required assets by clicking on the links!</p> */}
  
  {
    assetLoading && 
    // <div className='absolute t-[50%] l-[50%] -translate-x-[50%] -translate-y-[50%] scale-[2]'>
       <Loader 
        classProp={`absolute scale-[2.5] mt-[20%]`}
       />
    // </div>
  }
  
  <table className='w-[70%] grid gap-5'>
        {
          !assetLoading && 
          asset.map((a) => (
            <div>
              <div className='w-[70%] mx-auto m-4'>
                <img src={a.margin-schema} />
              </div>
              <tr key={a.id} className='bg-primary rounded-lg shadow-inner flex justify-between items-center'>
              <td className="p-4 text-center w-1/3">
                <div className="w-40 aspect-video">
                  <img src={a.asset_url} alt="image" className="w-[60%] object-cover" />
                </div>
              </td>
              <td className="p-4 text-center w-1/3 capitalize text-secondary font-inter">
                <p>{a.asset_name}</p>
              </td>
              <td className="p-4 text-center w-1/3">
                <p className="text-blue-500 hover:underline cursor-pointer text-center" onClick={() => copyToClipboard(a.asset_url)}>
                  Copy Asset
                </p>
              </td>
            </tr>
          </div>
        ))
        }
    </table>
  </>;
};

export default Assets;
