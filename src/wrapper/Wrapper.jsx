import React from 'react'
import { Provider } from 'react-redux'
import store from '../app/store'

import PropertiesProvider from '../contextProvider/PropertiesContext'

const Wrapper = ({children}) => {
    
  return (
    <>
    <Provider store={store}>
    {/* <PropertiesProvider> */}
    {children}
    {/* </PropertiesProvider> */}
    </Provider>
    </>
  )
}

export default Wrapper