import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"
import CatNav from "./CatNav"

export default function Main(){
    const [news, setNews] = useState( [] )
    const [filter, setFilter] = useState("All")
    const [resultat, setResultat] = useState([])
    const navCat = [...new Set(news.map((e) => e.source.name))]

    const getNews = async() =>{
        const response = await fetch('https://newsapi.org/v2/everything?q=last-of-us&pageSize=20&apiKey=b41e73f355fc407b84342d0f368a0abf')
        const data = await response.json()
        setNews(data.articles)
        setResultat(news.filter((items => items.source.name === filter)))
    }

    console.log(resultat)

    useEffect(() =>{
        getNews()
    },[filter])

    const handleFilter = (event) =>{
        console.log(event.target.innerHTML)
        setFilter(event.target.innerHTML)
    }

    const handleReset =() =>{
        setFilter("All")
    }


    return( 
        
    <>
    <h2>Her kommer nyheter</h2>
    <CatNav navCat={navCat} handleFilter={handleFilter} handleReset={handleReset}/>
    {resultat.length <= 0 ? news?.map((item, index) =>(
                <NewsCard key={index} img={item.urlToImage} title={item.title} ingress={item.description} />
        )) : resultat?.map((item, index) =>(
            <NewsCard key={index} img={item.urlToImage} title={item.title} ingress={item.description} />
    )) }
        </>
    
    )
        
    
}