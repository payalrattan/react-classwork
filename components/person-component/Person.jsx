export const Person = () => {
  const name = "Max";
  const age = 2;

  return (
    <p>
      He is {name} and He is {age} years old.{" "}
      {name} is {age >= 18 ? "an adult" : "a minor"}.
    </p>
  );
};
