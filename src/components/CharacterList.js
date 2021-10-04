import '../styles/CharacterList.scss';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const html = props.character.map((contactData) => (
    <li className="card" key={contactData.id}>
      <Link to={`./contactData/${contactData.id}`} className="link-style">
        <CharacterCard contactData={contactData} />
      </Link>
    </li>
  ));

  return <ul className="cards">{html}</ul>;
};

export default CharacterList;
