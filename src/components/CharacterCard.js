import '../styles/CharacterCard.scss';

const CharacterCard = (props) => {
  return (
    <section className="card-style">
      <img
        className="card_img"
        src={props.contactData.img}
        alt={`Foto de ${props.contactData.name}`}
        title={`Foto de ${props.contactData.name}`}
      />
      <h4 className="name-style">{props.contactData.name}</h4>
      <p className="specie-style">{props.contactData.species}</p>
    </section>
  );
};

export default CharacterCard;
