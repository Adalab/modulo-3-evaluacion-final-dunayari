import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { Route, Switch, useRouteMatch } from 'react-router';

function App() {
  const [character, setCharacter] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('all');

  useEffect(() => {
    callToApi(searchName).then((initialCharacter) => {
      setCharacter(initialCharacter);
      console.log(initialCharacter);
    });
  }, [searchName]);

  const handleChangeSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };
  const handleChangeSearchSpecies = (ev) => {
    setSearchSpecies(ev.target.value);
  };

  const routeData = useRouteMatch('/contactData/:id');
  const contactId = routeData !== null ? routeData.params.id : '';

  const selectedContact = character.find(
    (contact) => contact.id === parseInt(contactId)
  );

  const filteredCharacter = character
    .filter((contact) =>
      contact.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (type) => searchSpecies === 'all' || searchSpecies === type.species
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
        <Switch>
          <Route path="/contactData/:id">
            <section>
              <CharacterDetail contactData={selectedContact} />
            </section>
          </Route>

          <Route exact path="/">
            <section>
              <Filters
                searchName={searchName}
                handleChangeSearchName={handleChangeSearchName}
                searchSpecies={searchSpecies}
                handleChangeSearchSpecies={handleChangeSearchSpecies}
              />
            </section>
            <section>
              <CharacterList character={filteredCharacter} />
            </section>
          </Route>
          <Route>
            <section>¡Vaya! Página errónea.</section>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
