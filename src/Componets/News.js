import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import SearchList from './SearchList';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const News = (props)=>{
  // const host = "http://localhost:8080"
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const[search, setSearch] = useState("");
  //const [searchShow, setSearc hShow] = useState(false); 
  // const [page, setPage] = useState(1)
  // const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - TodayNews`;
  
const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 
   
  // "homepage": "https://newssetblue.com/NewsApp",
    
  const updateNews = async () => {
       props.setProgress(10);
      // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${props.pageSize}`;
      let url = `/news/list/${props.category}`;
      setLoading(true)
      let data = await fetch(url, {
        method: "POST",
        headers : {
          "Content-Type": "application/json"
        }
      });
      console.log(data);
      props.setProgress(30);
      let parsedData = await data.json() 
      console.log(parsedData);
      props.setProgress(70);
      setArticles(parsedData.data)
      
      // setTotalResults(parsedData.totalResults)
      setLoading(false)
      
      props.setProgress(100);
}

useEffect(() => {
  updateNews(); 
  // eslint-disable-next-line
}, [])

/* eslint-disable no-unused-vars */
const fetchMoreData = async () => { 
  let url = `/news/list/${props.category}`;
  let data = await fetch(url, {
    method: "POST",
    headers : {
      "Content-Type": "application/json"
    },  
  });
  let parsedData = await data.json()  
  setArticles(articles.concat(parsedData.data))  
}; 

//Search Keyword api
const fetchApi = async () => {
  let url = `/news/search/?keyword=${search}`
  let data = await fetch(url, {
    headers : {
      "Content-Type": "application/json"
    },  
  })
  let parsedData = await data.json()
  setArticles(parsedData.data)
} 
const updateSearchKeyword = (event) => {
  console.log("search value: " + search);
  setSearch(event.target.value)
}
// const handleSearch = () => {
//   console.log(search);
//   fetchApi();
// }
return (
      <>
      <SearchList updateSearchKeyword={updateSearchKeyword} fetchApi={fetchApi}/>
       

          {/* <input type='text' placeholder='search' onChange={updateSearchKeyword} style={{marginTop: '100px'}}/>   */}
          {/* <button type="button" onClick={fetchApi}>Search</button>  */}
          {/* <button type="button" class="btn btn-outline-info" onClick={fetchApi}>Search</button>      */}
          
          <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px, revert' , color: 'black', }}>Today-News {capitalizeFirstLetter(props.category)} Headlines </h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    // next={fetchMoreData}
                    // hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >  
              
                {/* <div className="container">
                <div className="row">
                    {!loading && articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.name} />
                          
                        </div>zz
                    })}
                </div>
                </div> */}
               <div className="container">
                <div className='row'>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
                <Masonry>
                    {!loading && articles.map((element) => {
                        return <div className="col" key={element.url} style={{ margin: '3px 1px -23px 3px' }}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.name} />
                            
                        </div>
                    })}
                </Masonry>
                </ResponsiveMasonry>
                </div>
                </div>


                
             
      
                </InfiniteScroll>
                </>
      
     )  
  
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News


