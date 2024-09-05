import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useParams } from "react-router-dom";
// 1. grab params: useParams
// 2. call API on load : axios & useEffect
// 3. variable change after API response : state

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const {id} = useParams();

  useEffect(()=>{
    axios.get(`https://api.tvmaze.com/people/${id}`)
      .then(response=>{
        setPeople(response.data)
      })
      .catch(err=>console.log(err))
  }, [id])
 
  return (
    <div>
      <h3>People Details</h3>
      {
        people?
         <>
            <h2>{people.name}</h2>
            <img src={people.image.medium} alt={people.name} />
            <h4>Gender: {people.gender} </h4>
            <h4>Birthday: {people.birthday} </h4>
         </>:
         <h3>Loading...</h3>
      }
    </div>
  )
}

export default PeoplePage