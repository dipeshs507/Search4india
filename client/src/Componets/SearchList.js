import React from 'react'

export default function SearchList({updateSearchKeyword, fetchApi}) {
  return (
   <div className='container' style={{'flex':'center'}}>
    <div className='row'>
    <div className='col-3'></div>

    <div className='col-6'>
     <div className="input-group" style={{'marginTop': '10vh' , 'width': '100%'}}>
      <input type="text" className="form-control rounded-1" placeholder="Search News"
       onChange={updateSearchKeyword}
        aria-label="Search" aria-describedby="button-addon2"/>
      <button className="btn btn-outline-info rounded-1" type="button" id="button-addon2"
       onClick={fetchApi}
       >Search</button>
     </div>
    </div>
    <div className='col-3'></div>

  </div>
  </div>
  )
}

