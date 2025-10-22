import React from 'react'

const Brief = ({file}) => {
    console.log("File in Brief component:", file);
  return (
    <div className='place-items-center py-5'>
     <p>Reviewing uploaded files...</p> 
    </div>
  )
}

export default Brief
