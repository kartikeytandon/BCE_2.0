import React from 'react';

const AssetList = [
  {
    image: "/assets/schemasample.webp",
    name: "background image",
    url: "https://i.imgur.com/HVHq3Yz.jpeg"
  },
  {
    image: "/assets/schemasample.webp",
    name: "icons",
    url: "https://i.imgur.com/HVHq3Yz.jpeg"
  },
  {
    image: "/assets/schemasample.webp",
    name: "text color",
    url: "#17131A"
  },
  {
    image: "/assets/schemasample.webp",
    name: "background color",
    url: "#2AF331"
  },
  {
    image: "/assets/schemasample.webp",
    name: "primary font",
    url: "Inter"
  },
  {
    image: "/assets/schemasample.webp",
    name: "secondary font",
    url: "lato"
  },
];


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
  return <>
  {/* <p className='text-bold text-xl tracking-wider text-center py-2 mx-4 my-2 bg-secondary opacity-70 font-inter w-full'>You can copy the required assets by clicking on the links!</p> */}
  <table className='w-[70%] grid gap-5'>
        {AssetList.map((asset, index) => (
            <tr key={index} className='bg-primary rounded-lg shadow-inner flex justify-between items-center'>
            <td className="p-4 text-center w-1/3">
              <div className="w-40 aspect-video">
                <img src={asset.image} alt="image" className="w-full h-full object-cover" />
              </div>
            </td>
            <td className="p-4 text-center w-1/3 capitalize text-secondary font-inter">
              <p>{asset.name}</p>
            </td>
            <td className="p-4 text-center w-1/3">
              <p className="text-blue-500 hover:underline cursor-pointer text-center" onClick={() => copyToClipboard(asset.url)}>
                {asset.url}
              </p>
            </td>
          </tr>
        ))}
    </table>
  </>;
};

export default Assets;
