import React, { useEffect } from 'react'

const LoginSuccess = () => {

    useEffect(()=>{
        setTimeout(()=>{
            window.close()
        },1000)
    },[])
  return (
    <div className='min-h-[85vh]'>LoginSuccess</div>
  )
}

export default LoginSuccess