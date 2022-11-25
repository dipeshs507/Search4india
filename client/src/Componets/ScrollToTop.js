import React from 'react'

const ScrollToTop = () => {

    const Movetop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }




  return (
    <div className='new text-end fixed-bottom ' style={{'margin': '20px'}}>
        <button className='btn btn-danger border-rounded' onClick={Movetop}>top</button>
    </div>
  )
}

export default ScrollToTop