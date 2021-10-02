import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

function App() {
  const [character, setCharacter] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    callToApi().then((initialCharacter) => {
      setCharacter(initialCharacter);
      console.log(initialCharacter);
    });
  }, []);

  const filteredCharacter = character.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

  return (
    <>
      <div>
        <header className="header">
          <img
            className="header_image"
            src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
            alt="img"
          />
        </header>
        <section>
          <form action="">
            <input type="text" name="name" id="name" />
          </form>
        </section>
        <section>
          <CharacterList character={filteredCharacter} />
        </section>
        <section>
          <CharacterList character={character} />
        </section>
        <ul className="cards">
          <li className="card"></li>
        </ul>
      </div>
    </>
  );
}

export default App;
