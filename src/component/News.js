import React, {useState,useEffect} from 'react'
import NewsItems from './NewsItems'
export default function News(props) {
    const [state, setstate] = useState(
        {
            article: [],
            page: 1,
            totalarticle: 0,
        }
    )
    useEffect(() => {
        const fetchData = async ()  => {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81784562b9984983adb9d0349e674366&page=1&pageSize=${props.pageSize}`; 
            let data = await fetch(url);
            let parsedData = await data.json()
            setstate((prevState) => ({
                ...prevState,
                article: parsedData.articles,
                totalarticle: parsedData.totalResults,
                page: 1
              }));
          }
        fetchData();
    },[props.country,props.category,props.pageSize])
    const previousPage = async ()=>
    {
        if(state.page > 1)
        {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81784562b9984983adb9d0349e674366&page=${state.page-1}&pageSize=${props.pageSize}`; 
        let data = await fetch(url);
        let parsedData = await data.json()
        setstate((prevState) => ({
            ...prevState,
            article: parsedData.articles,
            page: state.page - 1
          }));  
          window.scrollTo(0, 0)
        }
    }
    const nextPage = async ()=>
    {
        if(state.page < Math.ceil(state.totalarticle/props.pageSize))
        {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=81784562b9984983adb9d0349e674366&page=${state.page+1}&pageSize=${props.pageSize}`; 
            let data = await fetch(url);
            let parsedData = await data.json()
            setstate((prevState) => ({
                ...prevState,
                article: parsedData.articles,
                page: state.page + 1
              }));
              window.scrollTo(0, 0)
        }  
    }
    return (
        <>
        <div className='container my-3'>
            <h1 className="text-center" style={{margin:"90px 0px 50px 0px"}}>News Reader - Top Headlines - {props.subheading}</h1>
            <div className='row '>
            {
                state.article.map((element, index) => 
                <div className='col-md-4 ' key={index}>
                    <NewsItems key={index} title={element?.title} description={element?.description} imgUrl={element?.urlToImage} url={element?.url} author={element.author} date={element.publishedAt}/>
                </div>    
            )}
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={state.page===1} onClick={previousPage} className ="btn btn-primary">Previous</button>
            <p >{state.page}/{Math.ceil(state.totalarticle/props.pageSize)}</p>
            <button type="button" disabled={ state.page >= Math.ceil(state.totalarticle/props.pageSize)} onClick={nextPage} className="btn btn-primary">Next</button>
            </div>
        </div>
        </>
    )
}
