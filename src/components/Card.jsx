import React from 'react'
import PreviewImage from '../assets/previewImage.png';

const Card = ({name, collection, description, photo}) => {
  return (
    <div className='bg-gray-500 border-2 border-gray-900 rounded-xl h-80 w-60'>
        <div className='grid  items-start gap-2'>
            <div className='p-2 hover:p-0'>
                <img src={PreviewImage} className='h-40 hover:h-44 w-96 rounded-xl'/>
            </div>
            <div className='grid p-2 text-white text-xl '>
                <h1>Name: {name}</h1>
                <h1>Collection: {collection}</h1>
                <h1>Description: {description}</h1>
            </div>
        </div>
    </div>
  )
}


export default Card;