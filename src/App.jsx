import React from "react";
import Status from "./components/Status.jsx";
import Languages from "./components/Languages.jsx";
import Word from "./components/Word.jsx";
import Keyboard from "./components/Keyboard.jsx";
import WordProvider from "./context/WordProvider.jsx";
import Reset from "./components/Reset.jsx";

export default function App() {

  return (
    <main>
      <WordProvider>
        <div className="header">
          <h1>Assembly: Endgame</h1>
          <span>Guess the word in under 8 attempts to keep the </span>
          <br />
          <span>programming world safe from Assembly!</span>
        </div>
        <Status />
        <Languages />
        <Word />
        <Keyboard />
        <Reset/>
      </WordProvider>
    </main>
  );
}
