import React from 'react'
import Toaster from '../../components/Toaster'

const Kitchen = () => {
  return (
    
    <div className='container-fluid'>
        <div className='row' style={{backgroundColor: 'yellow'}}>
        <div className='col-md-12'>
        <div className='container'>
            <h1>Welcome to the Kitchen</h1>
        </div>
        </div>
        </div>
        <div className='row' style={{paddingTop: 30}}>
            <div className='col-md-12'>
                <div className='container'>
<div className='row'>
<div className='col-md-4'>
            <Toaster />
         </div>
         <div className='col-md-4'>
            <Toaster />
         </div>
         <div className='col-md-4'>
            <Toaster />
         </div>
</div>
                </div>
            </div>
       
        </div>
    
    </div>
  )
}

export default Kitchen
