const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
    </form>
  );
};

export default Filters;
