const App = (props) => {
  const exersice1 = 10;
  const exercise2 = 7;
  const exercise3 = 14;
  const total = exersice1 + exercise2 + exercise3;

  return (
    <>
      <div>
        <Header course="Halfstack Application Development" />
        <Content
          part1="Fundamentals of React"
          exersice1={10}
          part2="Using props to pass data"
          exercise2={7}
          part3="State of a Component"
          exercise3={14}
        />
        <Total total={total} />
      </div>
    </>
  );
};
const Header = (props) => {
  return (
    <>
      <h1> {props.course} </h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part="Fundamentals of Rreact" exersice={10} />
      <Part part="Using props to pass data" exersice={7} />
      <Part part="State of a Component" exersice={14} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p> Number of exersices {props.total} </p>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {" "}
        {props.part} {props.exersice}{" "}
      </p>
    </>
  );
};

export default App;
