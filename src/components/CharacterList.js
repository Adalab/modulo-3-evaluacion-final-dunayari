import CharacterCard from './CharacterDetail';

const CharacterList = (props) => {
  const html = props.character.map((contactData) => (
    <li className="card" key={contactData.id}>
      <CharacterCard contactData={contactData} />
    </li>
  ));

  return <ul className="cards">{html}</ul>;
};

export default CharacterList;
