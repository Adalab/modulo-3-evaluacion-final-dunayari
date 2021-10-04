import '../styles/Filters.scss';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" action="" onSubmit={handleSubmit}>
      <input
        className="input-name"
        type="text"
        name="name"
        id="name"
        placeholder="Busca un personaje"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
      <label htmlFor="species">Especie</label>
      <select
        className="inputs"
        name="species"
        id="species"
        checked={props.searchSpecies}
        onChange={props.handleChangeSearchSpecies}
      >
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </form>
  );
};

export default Filters;
