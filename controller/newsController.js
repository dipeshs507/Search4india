const newsSchema = require("../models/newsSchema");
var fetch = require("node-fetch");

async function syncRoute(req, res, next) {
     let categories = ["business","entertainment","general","health","science","sports","technology"];
    // let categories = ["business"];
    let newsSet;
    let publishedAt;
    let totalArticleFound = 0;
    // let getdata;
    
    // getdata = await newsSchema.countDocuments({ category: "business", title: "New Maruti Suzuki Alto K10 teased; exterior design revealed - CarWale" });
    // console.log(getdata);



    await categories.forEach(async (category) => {
        // console.log(category);
        let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=bdc87724178c4e3fa478b560539345ed&category=${category}&pagesize=100`;
        // console.log(url);
        await fetch(url, { 
            headers: {
              "Content-Type": "application/json",
            },
          }).then(response => response.json())
          .then(async (data) => {
            // console.log(data);
            let { articles } = data;
            if(articles) {
                await articles.forEach(async (article) => { 
                  
                  publishedAt = article.publishedAt;

                  // console.log(category);

                  totalArticleFound = 0;
                  totalArticleFound = await newsSchema.countDocuments({ category, title: article.title }); 
                  // totalArticleFound = getdata.length;
                  // console.log(totalArticleFound);

                  if(totalArticleFound <= 0) {
                    newsSet = {
                      category: category,
                      id: article.source.id,
                      name: article.source.name,
                      author: article.author,
                      title: article.title,
                      description: article.description,
                      url: article.url,
                      urlToImage: article.urlToImage,
                      publishedAt,
                      content: article.content
                    };
                    let newdata = new newsSchema(newsSet);
                    await newdata.save();
                  } else {                                    
                    // console.log(article.title);
                  }
                });
            }             
          }).catch(err => console.log(err));
        //console.log(response.data)
    });
    
    res.json({ message: "DATA SAVED SUCESSFUL"})
}

async function listRoute(req, res, next) {
  let category = req.params.category;
  if(!category) return res.json({ message: "Please Enter category!", status: 0 })
  await newsSchema.find({category}).sort({ _id: -1 })
  .then((news) => {                        
      res.json({
          message: "success",
          status: 1,
          data: news
      })
  })
  .catch((err) => {
      res.json({ message: "Something went wrong, please try again!", status: 0, err })
  })    
}

async function  SearchRoute(req, res, next) {
  let data;
  try {
    let { keyword } = req.query;
    data = await newsSchema.find({ "title": { $regex: '.*' + keyword + '.*', $options: 'i' } });
    // console.log(data);
  } catch(err) {
      res.json({ message: "Something went wrong, please try again!", status: 0, err })
  };

  res.json({
    message: "success",
    status: 1,
    data
  })
}

module.exports = {
    syncRoute,
    listRoute,
    SearchRoute
};
