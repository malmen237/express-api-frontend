/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [gamesList, setGamesList] = useState({ nesGames: [] });
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    fetch('https://project-express-api-4f3s7d6nxa-lz.a.run.app/games')
      .then((data) => data.json())
      .then((json) => setGamesList(json.response))
  }, []);

  const onGameSearch = (event) => {
    setTextInput(event.target.value);
  }

  return (
    <section className="list-section">
      <h1>All games to the Nintendo Entertainment System:</h1>
      <input type="text" onChange={onGameSearch} placeholder="Search for games..." />
      {gamesList.nesGames.map((game) => {
        if (game.title.includes(textInput)) {
          return (
            <Link key={game.id} to={`/details/${game.id}`}>
              <p>{game.title}</p>
            </Link>
          )
        } else {
          return (<div key={game.id}> </div>)
        }
      })}
    </section>
  )
}
export default Main;