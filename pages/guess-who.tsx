import * as React from "react";

import { Button, HtmlHead, Spacer, Text } from "components/shared";
import styled from "styled-components";
import { colors } from "styles/colors";

/**
 * TODO
 *   - Image flash on background transform
 *   - Character selection on load
 *   - Grid sizing
 *   - Safari testing
 */

// Board initialisation
let initialiseBoard = [
  { name: "Aaliyah", src: "https://placehold.it/200x440", flipped: false },
  { name: "Isaiah", src: "https://placehold.it/200x441", flipped: false },
  { name: "Ida", src: "https://placehold.it/200x442", flipped: false },
  { name: "Ricky", src: "https://placehold.it/200x443", flipped: false },
  { name: "Petunia", src: "https://placehold.it/200x444", flipped: false },
  { name: "Isabella", src: "https://placehold.it/200x445", flipped: false },
  { name: "Meryl", src: "https://placehold.it/200x446", flipped: false },
  { name: "Marlon", src: "https://placehold.it/200x447", flipped: false },
  { name: "Harley", src: "https://placehold.it/200x448", flipped: false },
  { name: "Lana", src: "https://placehold.it/200x449", flipped: false },
  {
    name: "Jean-Claude",
    src: "https://placehold.it/201x440.png",
    flipped: false
  },
  { name: "Regina", src: "https://placehold.it/202x440", flipped: false },
  { name: "Xander", src: "https://placehold.it/203x440", flipped: false },
  { name: "Remy", src: "https://placehold.it/204x440", flipped: false },
  { name: "Otis", src: "https://placehold.it/205x440", flipped: false },
  { name: "Alfredo", src: "https://placehold.it/206x440", flipped: false },
  { name: "Solomon", src: "https://placehold.it/207x440", flipped: false },
  { name: "Violet", src: "https://placehold.it/208x440", flipped: false },
  { name: "Axel", src: "https://placehold.it/209x440", flipped: false },
  { name: "Zivah", src: "https://placehold.it/201x441", flipped: false },
  { name: "Bernard", src: "https://placehold.it/201x442", flipped: false },
  { name: "Zara", src: "https://placehold.it/201x443", flipped: false },
  { name: "Wilfred", src: "https://placehold.it/201x444", flipped: false },
  { name: "Yves", src: "https://placehold.it/201x445", flipped: false }
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
                  name={initialiseBoard[newCard].name}
                  src={initialiseBoard[newCard].src}
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

const CaracterImg = styled.div<{ src: string; flipped: boolean }>`
  display: block;
  width: 100%;
  padding-bottom: 112.5%;
  background-image: url(${p => p.src});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: ${p => (p.flipped ? "0% 100%" : "0% 0%")};

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
