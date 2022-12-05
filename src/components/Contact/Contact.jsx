export const Contact = ({ id, name, number, deleteContact }) => {
  const handleClickDelete = event => {
    deleteContact(id);
  };

  return (
    <li>
      {name}:<span>{number}</span>
      <button name={id} type="button" onClick={handleClickDelete}>
        Delete
      </button>
    </li>
  );
};
