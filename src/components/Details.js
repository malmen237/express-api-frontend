import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [listItem, setListItem] = useState({ nesGames: [] })
  const { gameId } = useParams();

  useEffect(() => {
    fetch(`https://project-express-api-4f3s7d6nxa-lz.a.run.app/games/${gameId}`)
      .then((data) => data.json())
      .then((json) => setListItem(json.response))
  }, [gameId])

  return (
    <section className="border-box">
      <h1>{listItem.nesGames.title}</h1>
      <p>{listItem.nesGames.developer}</p>
      <p>{listItem.nesGames.publisher}</p>
      <p>{listItem.nesGames.release_date}</p>
    </section>
  )
}
export default Details;
