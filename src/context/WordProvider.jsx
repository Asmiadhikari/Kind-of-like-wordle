import React, { useState } from "react";
import { WordContext } from "./context";


const WordProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <WordContext.Provider
      value={{
        currentWord,
        setCurrentWord,
        guessedLetters,
        setGuessedLetters,
        wrongGuesses,
        setWrongGuesses,
        isGameOver,
        setIsGameOver,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;
