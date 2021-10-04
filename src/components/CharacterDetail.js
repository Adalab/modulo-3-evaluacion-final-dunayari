import '../styles/CharacterDetail.scss';

const CharacterDetail = (props) => {
  return (
    <section className="cards">
      <ul className="character-container">
        <li>
          <img
            className="card_img"
            src={props.contactData.img}
            alt={`Foto de ${props.contactData.name}`}
          />
        </li>

        <div className="card_detail">
          <li className="text-style">
            <h3 className="text-style">Nombre:{props.contactData.name}</h3>
          </li>
          <li className="text-style">Especie:{props.contactData.species}</li>
          <li className="text-style">Origen:{props.contactData.origin}</li>
          <li className="text-style">Episodios:{props.contactData.episode}</li>
          <li className="text-style">
            ¿Está vivo o muerto?:{props.contactData.status}
          </li>
        </div>
      </ul>
    </section>
  );
};

export default CharacterDetail;
