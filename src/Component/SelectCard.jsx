import React from 'react'

const SelectCard = (props) => {
  return (
  
    <div className='relative'>
    <img src= {props.img} alt = "/" className='w-full h-full object-cover'/>
    <div className='w-full h-full absolute top-0 left-0 bg-black/40'>
          <p className='text-xl font-bold text-white absolute bottom-0 p-4'>{props.txt}</p>
    </div>
    
    </div>
  
  )
}

export default SelectCard
