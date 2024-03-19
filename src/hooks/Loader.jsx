import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='flex items-center justify-center'>
<ThreeCircles
  visible={true}
  height="50"
  width="50"  
  color="#009688"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loader