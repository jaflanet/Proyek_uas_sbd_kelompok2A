import React from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/sidebar'

const Bars = () => {
    return (
        <>
         <Navbar />
          <Sidebar />
        </>
    )
}

export default Bars
export { default as LoginPages } from './LoginPages'
export { default as HomePages } from './HomePages'
export { default as HomeValoPages } from './HomeValoPages'
export { default as HomePUBGPages } from './HomePUBGPages'
export { default as HomeMLPages } from './HomeMLPages'
export { default as SignUpPages } from './SignUpPages'
export { default as ProfilePages } from './ProfilePages'


