import React from 'react'
import { Link  }  from 'react-router-dom'; 


const Navbar = () => {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg" style={{ 'background-color': 'rgb(206, 225, 241)'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img  style={{ width: '170px'}} src="logo/1.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-black"  aria-current="page" to="/">Home</Link>
            </li>
            <li className='nav-item'><a className='nav-link text-black' href='/business'>Business</a></li>
            <li className='nav-item'><a className='nav-link text-black' href='/entertainment'>Entertainment</a></li>
            <li className='nav-item'><a className='nav-link text-black' href='/general'>General</a></li>
            <li className='nav-item'><a className='nav-link text-black' href='/health'>Health</a></li>
            <li className='nav-item'><a className='nav-link text-black' href='/science'>Science</a></li>
            <li className='nav-item'><a className='nav-link text-black' href='/sports'>Sports</a></li>
            <li className='nav-item'><a className='nav-link text-black' href='/technology'>Technology</a></li>
          </ul>
          <div className='menu_style'>
            {/* <NavLink exact activeClassName='active_class' to="/search">
              Search
            </NavLink>
            <NavLink exact activeClassName='active_class' to="/search">
              Search
            </NavLink> */}

          </div>
           {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>  */}
        </div>
      </div>
    </nav>
    </div>
    )
  
}

export default Navbar