import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [listItem, setListItem] = useState({ nesGames: [] })
  const { gameId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/games/${gameId}`)
      .then((data) => data.json())
      .then((json) => setListItem(json.response))
  }, [gameId])

  return (
    <div className="border-box">
      <h1>{listItem.nesGames.title}</h1>
      <p>{listItem.nesGames.developer}</p>
      <p>{listItem.nesGames.publisher}</p>
      <p>{listItem.nesGames.release_date}</p>
    </div>
  )
}
export default Details;
