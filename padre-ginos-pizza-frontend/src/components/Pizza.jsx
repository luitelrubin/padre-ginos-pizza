const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <img
        src={props.image ? props.image : "https://www.picsum.photos/200"}
        alt={props.name}
      />
    </div>
  );
};

export default Pizza;
