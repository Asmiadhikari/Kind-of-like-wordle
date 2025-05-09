import React, { useContext } from "react";
import { WordContext } from "../context/context";

export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const {
    currentWord,
    guessedLetters,
    setGuessedLetters,
    wrongGuesses,
    setWrongGuesses,
    isGameOver,
  } = useContext(WordContext);

  function addGuessedLetters(letter) {
    const alreadyGuessed = guessedLetters.includes(letter);
    const isCorrect = currentWord.includes(letter);

    if (alreadyGuessed) return;

    setGuessedLetters((prevGuessedLetters) => [...prevGuessedLetters, letter]);

    if (!isCorrect) {
      setWrongGuesses((prev) => prev + 1);
    }
  }

  const keyboard = alphabet.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.split("").includes(letter);
    const buttonClass = isGuessed
      ? isCorrect
        ? "greenButton"
        : "redButton"
      : "";
    return (
      <button
        className={buttonClass}
        onClick={() => {
          if (!isGameOver) {
            addGuessedLetters(letter);
          }
        }}
        key={index}
      >
        {letter.toLocaleUpperCase()}
      </button>
    );
  });

  React.useEffect(() => {
    console.log("Wrong guesses:", wrongGuesses);
  }, [wrongGuesses]);

  return <div className="keyboardDiv">{keyboard}</div>;
}
