import "./greetingComponent.css";
export const Greeting = () => {
    const text = "Hello, React!";
  return (
    <h1 className="greeting">
        {text}
    </h1>
  );
};
