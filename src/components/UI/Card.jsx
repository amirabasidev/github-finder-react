const Card = ({ children, padding, margin }) => {
  return (
    <div className="card" style={{ padding, margin }}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  padding: "10px 15px",
};

export default Card;
