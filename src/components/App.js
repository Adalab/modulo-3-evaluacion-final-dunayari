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

  const handleChangeSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const filteredCharacter = character.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

  return (
    <>
      <div>
        <header className="header">
          <img
            className="header_image"
            src="//help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
            alt="img"
          />
        </header>
        <section>
          <Filters
            searchName={searchName}
            handleChangeSearchName={handleChangeSearchName}
          />
        </section>
        <section>
          <CharacterList character={filteredCharacter} />
        </section>
      </div>
    </>
  );
}

export default App;
