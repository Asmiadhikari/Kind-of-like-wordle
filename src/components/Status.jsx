import React from "react";
import { useContext } from "react";
import { WordContext } from "../context/context";
import { getFarewellText } from "../assets/utils";
import { languageList } from "../../src/assets/language.js";

export default function Status() {
  const { currentWord, guessedLetters, wrongGuesses, setIsGameOver } =
    useContext(WordContext);

  const language = languageList[wrongGuesses - 1]?.name;

  function getStatus() {
    if (wrongGuesses >= 8) {
      setIsGameOver(true);
      return (
        <section className="lose">
          <h2>You lose!</h2>
          <p>Better luck next time</p>
        </section>
      );
    } else if (
      currentWord.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      return (
        <section className="win">
          <h2>You win!</h2>
          <p>Well done!🎉</p>
        </section>
      );
    } else {
      const lastGuess = guessedLetters[guessedLetters.length - 1];
      const isLastGuessCorrect = currentWord.includes(lastGuess);

      if (!isLastGuessCorrect && guessedLetters.length > 0) {
        return (
          <section className="status">
            {language && <p>{getFarewellText(language)}</p>}
          </section>
        );
      } else {
        return <section className="status"></section>;
      }
    }
  }

  return <>{getStatus()}</>;
}
