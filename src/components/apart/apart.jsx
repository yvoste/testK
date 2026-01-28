import "./apart.scss";

const Apart = ({ title, location }) => {
  return (
    <div className="apart-info">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
};

export default Apart;
