import React, { useEffect, useState } from 'react';
import axios from 'axios';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Link copied to clipboard:', text);
    })
    .catch((error) => {
      console.error('Failed to copy link to clipboard:', error);
    });
};

const Assets = () => {
  const [asset, setAsset] = useState([])
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    axios.get('https://blockverseapi.brlakgec.com/asset_list/', {
      headers: {  
        Authorization: `Token ${accessToken}`
      }
    })
    .then(response => {
      console.log(response.data.asset_list);
      setAsset(response.data.asset_list)
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  return <>
  {/* <p className='text-bold text-xl tracking-wider text-center py-2 mx-4 my-2 bg-secondary opacity-70 font-inter w-full'>You can copy the required assets by clicking on the links!</p> */}
  <table className='w-[70%] grid gap-5'>
        {asset.map((a) => (
            <tr key={a.id} className='bg-primary rounded-lg shadow-inner flex justify-between items-center'>
            <td className="p-4 text-center w-1/3">
              <div className="w-40 aspect-video">
                <img src={a.asset_url} alt="image" className="w-full h-full object-cover" />
              </div>
            </td>
            <td className="p-4 text-center w-1/3 capitalize text-secondary font-inter">
              <p>{a.asset_name}</p>
            </td>
            <td className="p-4 text-center w-1/3">
              <p className="text-blue-500 hover:underline cursor-pointer text-center" onClick={() => copyToClipboard(a.asset_url)}>
                {a.asset_url}
              </p>
            </td>
          </tr>
        ))}
    </table>
  </>;
};

export default Assets;
