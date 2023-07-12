//React-redux is providing a pre-defined hook called {useSelector} we can access reduxstore data.
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Test() {
   const data = useSelector((storedata)=>{
      return storedata;
    })
  return (
    <div className="card">
            <div className="card-header bg-success text-white ">
                <h3>Text Component</h3>
            </div>
            <div className="card-body ">
                <h2 >Content: <span className='text-danger'>{data.textReducer}</span> </h2>
            </div>
        </div>
  )
}

export default Test
