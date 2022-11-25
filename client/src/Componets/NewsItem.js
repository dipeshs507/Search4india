import React from 'react'


const NewsItem= (props)=> {

   
        let { title, description, imageUrl, newsUrl, author, date, name } = props;
        return (

            <div className="my-3">
                <div className="card">
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {name} </span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                        <p className="card-text">{description ? description : "To see description, please visit the link below"
                        }</p>
                        <p className="card-text"><small className="text-danger">Published by {author ? author :"Unknown Author"} on {new Date (date).toGMTString() }</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" style={{ border: '2px solid black' }} className="btn btn-small btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem