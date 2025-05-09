import React from "react";
import { useContext } from "react";
import { WordContext } from "../context/context";
import { words } from "../assets/words";

export default function Reset() {
  const {
    isGameOver,
    setGuessedLetters,
    setWrongGuesses,
    setIsGameOver,
    setCurrentWord,
  } = useContext(WordContext);

  function resetAll() {
    setGuessedLetters([]);
    setWrongGuesses(0);
    setIsGameOver(false);
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  }

  return (
    <>
      {isGameOver && (
        <button className="spaceBar" onClick={resetAll}>
          New Game
        </button>
      )}
    </>
  );
}
