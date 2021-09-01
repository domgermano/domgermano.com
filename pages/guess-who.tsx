import * as React from "react";

import { Button, HtmlHead, Spacer, Text } from "components/shared";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "styles/colors";

/**
 * TODO
 *   - Image flash on background transform
 *   - Character selection on load
 *   - Grid sizing
 *   - Safari testing
 */

// Cast
const newCast = [
  {
    name: "Aaliyah",
    src: "/guess-who/Aaliyah.png",
    flipped: false
  },
  {
    name: "Isaiah",
    src: "/guess-who/Isaiah.png",
    flipped: false
  },
  { name: "Ida", src: "/guess-who/Ida.png", flipped: false },
  { name: "Ricky", src: "/guess-who/Ricky.png", flipped: false },
  {
    name: "Petunia",
    src: "/guess-who/Petunia.png",
    flipped: false
  },
  {
    name: "Isabella",
    src: "/guess-who/Isabella.png",
    flipped: false
  },
  { name: "Meryl", src: "/guess-who/Meryl.png", flipped: false },
  {
    name: "Marlon",
    src: "/guess-who/Marlon.png",
    flipped: false
  },
  {
    name: "Harley",
    src: "/guess-who/Harley.png",
    flipped: false
  },
  { name: "Lana", src: "/guess-who/Lana.png", flipped: false },
  {
    name: "Jean-Claude",
    src: "/guess-who/Jean-Claude.png",
    flipped: false
  },
  {
    name: "Regina",
    src: "/guess-who/Regina.png",
    flipped: false
  },
  {
    name: "Xander",
    src: "/guess-who/Xander.png",
    flipped: false
  },
  { name: "Remy", src: "/guess-who/Remy.png", flipped: false },
  { name: "Otis", src: "/guess-who/Otis.png", flipped: false },
  {
    name: "Alfredo",
    src: "/guess-who/Alfredo.png",
    flipped: false
  },
  {
    name: "Solomon",
    src: "/guess-who/Solomon.png",
    flipped: false
  },
  {
    name: "Violet",
    src: "/guess-who/Violet.png",
    flipped: false
  },
  { name: "Axel", src: "/guess-who/Axel.png", flipped: false },
  { name: "Zivah", src: "/guess-who/Zivah.png", flipped: false },
  {
    name: "Bernard",
    src: "/guess-who/Bernard.png",
    flipped: false
  },
  { name: "Zara", src: "/guess-who/Zara.png", flipped: false },
  {
    name: "Wilfred",
    src: "/guess-who/Wilfred.png",
    flipped: false
  },
  { name: "Yves", src: "/guess-who/Yves.png", flipped: false }
];

const originalCast = [
  {
    name: "Sam",
    src: "/guess-who/original/Sam.jpg",
    flipped: false
  },
  {
    name: "Alex",
    src: "/guess-who/original/Alex.jpg",
    flipped: false
  },
  { name: "Peter", src: "/guess-who/original/Peter.jpg", flipped: false },
  { name: "Maria", src: "/guess-who/original/Maria.jpg", flipped: false },
  {
    name: "Anne",
    src: "/guess-who/original/Anne.jpg",
    flipped: false
  },
  {
    name: "Claire",
    src: "/guess-who/original/Claire.jpg",
    flipped: false
  },
  { name: "Philip", src: "/guess-who/original/Philip.jpg", flipped: false },
  {
    name: "Alfred",
    src: "/guess-who/original/Alfred.jpg",
    flipped: false
  },
  {
    name: "Bill",
    src: "/guess-who/original/Bill.jpg",
    flipped: false
  },
  { name: "Herman", src: "/guess-who/original/Herman.jpg", flipped: false },
  {
    name: "Anita",
    src: "/guess-who/original/Anita.jpg",
    flipped: false
  },
  {
    name: "Paul",
    src: "/guess-who/original/Paul.jpg",
    flipped: false
  },
  {
    name: "Frans",
    src: "/guess-who/original/Frans.jpg",
    flipped: false
  },
  { name: "Max", src: "/guess-who/original/Max.jpg", flipped: false },
  { name: "Richard", src: "/guess-who/original/Richard.jpg", flipped: false },
  {
    name: "Bernard",
    src: "/guess-who/original/Bernard.jpg",
    flipped: false
  },
  {
    name: "Robert",
    src: "/guess-who/original/Robert.jpg",
    flipped: false
  },
  {
    name: "Susan",
    src: "/guess-who/original/Susan.jpg",
    flipped: false
  },
  { name: "Charles", src: "/guess-who/original/Charles.jpg", flipped: false },
  {
    name: "David",
    src: "/guess-who/original/David.jpg",
    flipped: false
  },
  { name: "Tom", src: "/guess-who/original/Tom.jpg", flipped: false },
  {
    name: "Joe",
    src: "/guess-who/original/Joe.jpg",
    flipped: false
  },
  { name: "George", src: "/guess-who/original/George.jpg", flipped: false },
  { name: "Eric", src: "/guess-who/original/Eric.jpg", flipped: false }
];

// First shuffle
const shuffle = () => Math.floor(Math.random() * Math.floor(24));

/**
 * Guess who
 */
const GuessWho = () => {
  // Fetching query param for the game mode
  const router = useRouter();
  const mode = router.query.mode as string;

  // Board initialisation
  let initialiseBoard: { name: string; src: string; flipped: boolean }[];
  switch (mode) {
    case "original":
      initialiseBoard = originalCast;
      break;
    default:
      initialiseBoard = newCast;
      break;
  }

  // Setting states for the board and the game
  const [board, setBoard] = React.useState(initialiseBoard);
  const [count, setCount] = React.useState(24);
  const [newCard, setNewCard] = React.useState(shuffle);
  const guessCard = initialiseBoard[newCard];

  // const [resize, setResize] = React.useState(false);

  // A function to update the board. Sets a character flipped state and updates
  // the board count
  const updateBoard = React.useCallback(
    (i: number, flipped: boolean) => {
      let handleUpdate = [...board];
      handleUpdate[i] = { ...handleUpdate[i], flipped: !flipped };
      setBoard(handleUpdate);
      setCount(flipped ? count + 1 : count - 1);
    },
    [board, count]
  );

  // Start a new game
  const reset = () => {
    setBoard(initialiseBoard);
    setCount(24);
    setNewCard(shuffle);
  };

  // const toggleSize = () => {
  //   setResize(!resize);
  // };

  return (
    <>
      <HtmlHead
        title="Dom — Guess Who"
        description="Let's play guess who!"
        url="https://www.domgermano.com/guess-who"
        type="website"
      />
      <Table>
        <TrayPanel>
          <TrayContainer>
            <TrayContent>
              <Text kind="system">They're guessing</Text>
              <Spacer spacing={10} />
              <CharacterContainer>
                <Character
                  name={guessCard.name}
                  src={guessCard.src}
                  flipped={false}
                />
              </CharacterContainer>
              <Spacer spacing={60} />
              <Text kind="system">Still on your board</Text>
              <Spacer spacing={10} />
              <Text kind="display">{count}</Text>
              <Spacer spacing={60} />
              <Button onClick={reset}>Reset game</Button>
            </TrayContent>
          </TrayContainer>
        </TrayPanel>
        <BoardPanel>
          <BoardContainer>
            <BoardContent>
              {board.map((b, i) => (
                <Action key={i} onClick={() => updateBoard(i, b.flipped)}>
                  <Character name={b.name} src={b.src} flipped={b.flipped} />
                </Action>
              ))}
            </BoardContent>
          </BoardContainer>
        </BoardPanel>
        {/* <GridResize resize={resize} onClick={toggleSize} /> */}
      </Table>
    </>
  );
};

export default GuessWho;

// Character
// =============================================================================

interface CharacterProps {
  /** character name */
  name: string;
  /** image file src */
  src: string;
  /** card flipped state */
  flipped: boolean;
}

export const Character = React.memo((props: CharacterProps) => {
  return (
    <Card>
      <Hover />
      <CaracterImg src={props.src} draggable="false" flipped={props.flipped} />
      <CharacterName kind="hand" textAlign="center" flipped={props.flipped}>
        {props.name}
      </CharacterName>
    </Card>
  );
});

const Card = styled.div`
  display: block;
  position: relative;
`;

const Hover = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: ${colors.orange200};
  border-radius: 100%;
  position: absolute;
  z-index: 1;

  opacity: 0;
  transform: translateY(10px);
  transition: transform 0.6s ease, opacity 0.6s ease;
`;

const CaracterImg = styled.div<{ src?: string; flipped: boolean }>`
  display: block;
  width: 100%;
  padding-bottom: 110%;
  background-image: url(${p => p.src});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: ${p => (p.flipped ? "0% 100%" : "0% 0%")};
  border-radius: 10px;

  position: relative;
  z-index: 2;
  transform: translateZ(0);
`;

const CharacterName = styled(Text)<{ flipped: boolean }>`
  text-decoration: ${p => (p.flipped ? "line-through" : "none")};
  color: ${p => (p.flipped ? colors.grey300 : colors.black100)};
`;

const Action = styled.button`
  display: block;
  padding: 0;
  background: none;
  border: none;

  cursor: pointer;
  outline: none;

  &:hover ${Hover}, &:focus ${Hover} {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CharacterContainer = styled.div`
  width: 180px;
`;

// Table
// =============================================================================

const Table = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 0;

  display: flex;
`;

const TrayPanel = styled.div`
  flex: none;
  width: 360px;
  overflow: auto;
  border-right: 1px solid ${colors.grey300};
`;

const TrayContainer = styled.div`
  min-height: 100%;
  padding: 80px 40px;
  box-sizing: border-box;
  background: ${colors.orange100};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TrayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardPanel = styled.div`
  flex: auto;
  overflow: auto;
  padding-right: 50px;
`;

const BoardContainer = styled.div`
  min-height: 100%;
  padding: 100px 40px 150px;
  box-sizing: border-box;
`;

const BoardContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 40px 20px;
  max-width: 950px;
  margin: auto;
`;

// Size toggle
// =============================================================================

export const GridResize = (props: { resize: boolean; onClick: () => void }) => (
  <button onClick={props.onClick}>{props.resize ? "Small" : "Big"}</button>
);
