import React from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"


function Layout(props) {
    const { children } = props
  return (
    <div>
      
      <Header logo= '/images/Group 157.png' />
      { children }
      <Footer/>
    
    </div>
  )
}

export default Layout
