import React,{useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default function Business(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

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

 const capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
} 

  return (
    <div>
         <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px, revert' , color: 'lightyellow' }}>Today-News {capitalizeFirstLetter(props.category)} Headlines </h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    // next={fetchMoreData}
                    // hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >  
                <div className="container">
                <div className="row">
                    {!loading && articles.map((element) => {
                      
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.name} />

                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>

    </div>
  )
}
