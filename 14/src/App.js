import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

const mostVotes = (points) => {
  let maximum = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] > points[maximum]) maximum = i;
  }
  return maximum;
};

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const App = () => {
  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  //create a random number generator
  const handleButton = () => {
    const num = getRandomNumber(anecdotes.length);
    setSelected(num);
  };

  //copy points and make all changes to the the array you have copied
  const handleVotes = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    console.log(copy);
  };

  const highest = mostVotes(points);

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <p> has {points[selected]} votes</p>
      <button onClick={() => handleVotes()}>vote</button>
      <button onClick={() => handleButton()}>next anecdote</button>
      <h1> Anecdotes with the most votes</h1>
      <p> {anecdotes[highest]} </p>
      <p> has {points[highest]} votes </p>
    </>
  );
};

export default App;
