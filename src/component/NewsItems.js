import React from 'react'
export default function NewsItems(props) {
    return (
        <div className='container '>
        <div className="card my-3" >
            <img src={!props.imgUrl?"https://www.neoadviser.com/wp-content/uploads/2018/01/news-2.jpg":props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><small className="text-muted">Author: {!props.author?"Unknown":props.author} On {new Date(props.date).toGMTString()}</small></p>
                <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View News</a>
            </div>
        </div>
        </div>
    )
}
