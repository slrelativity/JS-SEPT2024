import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams } from "react-router-dom";
// 1. grab params: useParams
// 2. call API on load : axios & useEffect
// 3. variable change after API response : state


const ShowPage = () => {
  const [tvShow, setTvShow] = useState(null);

  const {id} = useParams();

  useEffect(()=>{
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response=>{
        setTvShow(response.data)
      })
      .catch(err=> console.log(err))
  }, [id])

  return (
    <div>
      <h3>Show details</h3>
      {
        tvShow?
          <>
            <h2>{tvShow.name}</h2>
            <img src={tvShow.image.medium} alt={tvShow.name} />
            <h4>Genre: 
              {
                tvShow.genres.map((eachGenre, idx)=>
                  <span key={idx}>#{eachGenre} </span>
                )
              }

            </h4>
          </>:
          <h4>Loading...</h4>
      }

    </div>
  )
}

export default ShowPage