const Contact = ({ data, delContactFunc }) => {
  const { name, number, id } = data;
  return (
    <>
      <h2>👤 {name}</h2>
      <p>☎️ {number}</p>
      <button
        type="button"
        onClick={() => {
          delContactFunc(id);
        }}
      >
        🪣
      </button>
    </>
  );
};

export default Contact;
