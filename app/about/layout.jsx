import React from 'react'

export const metadata = {
	title: 'About Microhealth App Directory'
}

// this layout will be used by team as well 
// it works for all of the pages in this directory
const AboutLayout = ({children}) => {
  return (
    <div>
        <h1>THIS IS THE ABOUT LAYOUT</h1>
        {children}
    </div>
  )
}

export default AboutLayout