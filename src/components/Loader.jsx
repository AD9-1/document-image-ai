import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div>
        <ThreeDots
        visible={true}
        height="60"
        width="60"
       
        color="#f59e0b" // amber-500
        ariaLabel="three-dots-loading"/>
    </div>
  )
}

export default Loader
