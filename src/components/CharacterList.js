import CharacterDetail from './CharacterDetail';

const CharacterList = (props) => {
  const html = props.character.map((contactData, id) => (
    <li className="card" key={id}>
      <CharacterDetail contactData={contactData} />
    </li>
  ));

  return <ul className="cards">{html}</ul>;
};

export default CharacterList;
