import React from 'react'
import LeftNav from '../components/LeftNav'
import CenterNav from '../components/CenterNav'
import RightNav from '../components/RightNav'

const App = () => {
  return (
    <div className='body'>
      <LeftNav/>
      <CenterNav/>
      <RightNav/>
    </div>
  )
}

export default App
