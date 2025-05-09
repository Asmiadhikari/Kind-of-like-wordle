/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { WordContext } from "../../src/context/context";
import { words } from "../assets/words";

export default function Word() {
  const { currentWord, setCurrentWord, guessedLetters, isGameOver } =
    useContext(WordContext);

  React.useEffect(() => {
    if (!currentWord) {
      setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    }
  }, [currentWord, setCurrentWord]);

  const letterList = currentWord.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);

    return (
      <span className="word" key={index}>
        {isGameOver || isGuessed ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return (
    <>
      <div className="pt-15">{letterList}</div>
    </>
  );
}
