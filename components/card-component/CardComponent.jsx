import "./cardComponent.css";
export const CardComponent = () => {
  const cardDescription = "This is a card component";
  return (
    <div className="card-class">
      <h2>Card Title</h2>
      <p>{cardDescription}</p>
    </div>
  );
};
