import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  ////Variables de estado////
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    callToApi().then((resp) => {
      setCharacter(resp);
      console.log(resp);
    });
  }, []);

  const renderCharacter = () => {
    return character.map((character, i) => {
      return (
        <li key={i}>
          <img src={character.img} alt="img" className="img" />
          <p>{character.name}</p>
          <p>{character.species}</p>
        </li>
      );
    });
  };
  return (
    <>
      <div>
        <header>
          <img src="../images/Rick_and_Morty.png" alt="img" />
        </header>
        <form action="">
          <input type="text" name="name" id="name" />
        </form>
        <ul>{renderCharacter()}</ul>
      </div>
    </>
  );
}

export default App;
