import "./host.scss";

const Host = ({ host }) => {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="host-info">
      <p className="host-name">
        {firstName} <br /> {lastName}
      </p>
      <img className="host-picture" src={host.picture} alt={`Portrait de ${host.name}`} />
    </div>
  );
};

export default Host;
