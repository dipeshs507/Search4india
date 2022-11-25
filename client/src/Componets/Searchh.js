import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const Cards = () => {
    const[user, setUser] = useState("");
    const[search, setSearch] = useState("");

    const fetchApi = async (ele) => {
      let url = `/news/search/?keyword=${ele}`
      let data = await fetch(url, {
        headers : {
    
          "Content-Type": "application/json"
        },
      
      })
      let parsedData = await data.json()
      console.log('res=====parsedData==========',parsedData)

        .then((response)=>{
          console.log('res===============',response)
            return response.json();
        }).then((data)=>{
            let gagan = parsedData.results
            console.log(gagan)
            setUser(gagan)
        })
    }
    useEffect(()=>{
        // fetchApi();
    }, [])

    const handleSearch = (event) => {
      setSearch(event.target.value)
      fetchApi(event.target.value);
    }

  return (
  <>
  <input type='text' placeholder='search' onChange={handleSearch} style={{marginTop: '100px'}}/>
  <div className="clearfix">
  <div className="row">
    {
      user.map((element) => {                      
        return <div className="col-md-3" key={element.url}>
            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.name} />

        </div>
      })
    }
  </div>
</div>

  </>
  )
}

export default Cards;