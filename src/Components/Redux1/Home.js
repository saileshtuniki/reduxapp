import React from 'react'
import Input from './Input'
import Test from './Test'

function Home() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col">
                <Input />
            </div>
        </div>
        <div className="row mt-5">
            <div className="col">
                <Test />
            </div>
        </div>
    </div>
  )
}

export default Home
