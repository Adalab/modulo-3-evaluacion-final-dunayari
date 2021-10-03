import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <>
      <Link to={`./contactData/${props.contactData.id}`}>
        <img
          className="card_img"
          src={props.contactData.img}
          alt={`Foto de ${props.contactData.name}`}
        />
      </Link>
      <ul>
        <li>Nombre:{props.contactData.name}</li>
        <li>Especie:{props.contactData.species}</li>
        <li>Origen:{props.contactData.origin}</li>
        <li>Episodios:{props.contactData.episode}</li>
        <li>¿Está vivo o muerto?:{props.contactData.status}</li>
      </ul>
    </>
  );
};

export default CharacterDetail;
