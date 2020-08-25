import * as React from "react";

import { HtmlHead } from "components/shared";
import styled from "styled-components";

// Board initialisation
let initialiseBoard = [
  { name: "Demetrius", flipped: false },
  { name: "Demarion", flipped: false },
  { name: "Eugene", flipped: false },
  { name: "Perla", flipped: false },
  { name: "Caylee", flipped: false },
  { name: "Gunnar", flipped: false },
  { name: "Aisha", flipped: false },
  { name: "Kasen", flipped: false },
  { name: "Landon", flipped: false },
  { name: "Izabella", flipped: false },
  { name: "Frances", flipped: false },
  { name: "Steven", flipped: false },
  { name: "Jensen", flipped: false },
  { name: "Emma", flipped: false },
  { name: "London", flipped: false },
  { name: "Alaina", flipped: false },
  { name: "Mario", flipped: false },
  { name: "Jovani", flipped: false },
  { name: "Walter", flipped: false },
  { name: "Eve", flipped: false },
  { name: "Erica", flipped: false },
  { name: "Lauren", flipped: false },
  { name: "Jose", flipped: false },
  { name: "Chana", flipped: false }
];

// First shuffle
const shuffle = () => Math.floor(Math.random() * Math.floor(24));

/**
 * Guess who
 */
const GuessWho = () => {
  // Setting states for the board and the game
  const [board, setBoard] = React.useState(initialiseBoard);
  const [count, setCount] = React.useState(24);
  const [newCard, setNewCard] = React.useState(shuffle);

  // A function to update the board. Sets a character flipped state and updates
  // the board count
  const updateBoard = (i: number, flipped: boolean) => {
    let handleUpdate = [...board];
    handleUpdate[i] = { ...handleUpdate[i], flipped: !flipped };
    setBoard(handleUpdate);
    setCount(flipped ? count + 1 : count - 1);
  };

  // Start a new game
  const reset = () => {
    setBoard(initialiseBoard);
    setCount(24);
    setNewCard(shuffle);
  };

  return (
    <>
      <HtmlHead
        title="Dom — Guess Who"
        description="Let's play guess who!"
        url="https://www.domgermano.com/guess-who"
        type="website"
      />
      {board.map((b, i) => (
        <span key={i} onClick={() => updateBoard(i, b.flipped)}>
          <Character name={b.name} flipped={b.flipped} />
        </span>
      ))}
      <hr />
      <div>count: {count}</div>
      <Character name={initialiseBoard[newCard].name} flipped={false} />
      <button onClick={reset}>reset</button>
    </>
  );
};

export default GuessWho;

// Character
// =============================================================================

interface CharacterProps {
  /** character name */
  name: string;
  /** card flipped state */
  flipped: boolean;
}

export const Character = (props: CharacterProps) => {
  return (
    <Card flipped={props.flipped}>
      <img src="https://placehold.it/100x100" draggable="false" />
      <p>{props.name}</p>
    </Card>
  );
};

const Card = styled.div<{ flipped: boolean }>`
  display: inline-block;
  opacity: ${p => (p.flipped ? "0.3" : "1")};
`;
