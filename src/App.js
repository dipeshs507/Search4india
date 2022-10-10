import './App.css';
import React, { useState } from 'react'
import Navbar from './Componets/Navbar';
import News  from './Componets/News';
import LoadingBar from 'react-top-loading-bar'
import ScrollToTop from './Componets/ScrollToTop'
// import Search from './Componets/Searchs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Business from './Componets/Business';
//  import Search from './Componets/Searchh';
//import News from './Componets/News';


const App = () => {
  const pageSize = 16;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  // setProgress = (progress)=>{
  //   this.setState({progress: progress})
  // }
 
    return (
      <div>   
        <Router>
        <Navbar/> 
       
        {/* <Search/> 
        <Search details={element}/> */}
        <LoadingBar 
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
          {/* <Route exact path="/search" Component={Search} /> */}
        </Switch>
        </Router>

        <ScrollToTop />
      </div>
    )
  
}
export default App;
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './Componets/Navbar';
// import News setProgress={setProgress} apiKey={apiKey}from './Componets/News setProgress={setProgress}';
// // import LoadingBar from 'react-top-loading-bar'
// import { BrowserRouter as Router,
//   Route,
//   Switch
//    } from 'react-router-dom'

// export default class App extends Component {
  
//   render() {
//     // const [progress, setProgress] = useState(0)

//     return (
//       <div>
//         <Router>
//            <Navbar />
//         {/* <LoadingBar
//           color='#f11946'
//           progress={progress} /> */}
//        <Switch>
//           <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey}key="general" pageSize={10} country="in" category="general"/></Route>
//           <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={10} country="in" category="business"/></Route>
//           <Route path="/entertainment"><News setProgress={setProgress} apiKey={apiKey}key="entertainment" content="Entertainment" country="in" category="Entertainment" /></Route>
//           <Route path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" content="General" country="in" category="General" /></Route>
//           {/* <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey}key="entertaiment" pageSize={10} country="in" category="entertainment"/></Route>
//           <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey}key="general" pageSize={5} country="in" category="general"/></Route> */}
//           <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey}key="health" pageSize={5} country="in" category="health"/></Route>
//           <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey}key="science" pageSize={5} country="in" category="science"/></Route>
//           <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey}key="sports" pageSize={5} country="in" category="sports"/></Route>
//           <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey}key="technology" pageSize={50} country="in" category="technology"/></Route>
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }




