import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({ title, category }) => {

    const [apiData, setApiData] = useState([])
    const cardsRef = useRef()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWE2MDgxNDI4ZjNlNWRmODhkMDRmYWU2MGM5NDU1ZSIsIm5iZiI6MTczMDY0MDA0MC4yMTkxNDUzLCJzdWIiOiI2NjFlNGFiMmVjYWVmNTAxN2NmOTI5N2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YL0lwe7uDSVcXj825kNBfIds65Q9qLqQvEGTCSXmrcg'
        }
    };

    const handleWheel = (event) => {
        event.prevenDefault()
        cardsRef.current.scrollLeft += event.deltaY
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])


    return (
        <div className='title-cards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className='title-cards__card-list' ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards
