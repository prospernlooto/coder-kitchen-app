import React from 'react'
import Toaster from '../../components/Toaster'
import authContext from '../../providers/power'

const Kitchen = () => {
  return (
    
    <div className='container-fluid'>
    
        <div className='row' style={{paddingTop: 30}}>
            <div className='col-md-12'>
                <div className='container'>
<div className='row'>
<div className='col-md-4'>
            <Toaster name={"Smeg"} />
         </div>
         <div className='col-md-4'>
          
         </div>
         <div className='col-md-4'>
          
         </div>
</div>
                </div>
            </div>
       
        </div>
    
    </div>
  )
}

export default Kitchen
