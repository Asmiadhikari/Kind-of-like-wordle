import React from "react";
import { languageList } from "../../src/assets/language.js";
import { WordContext } from "../context/context.js";
import { useContext } from "react";

export default function Languages() {
  const { wrongGuesses } = useContext(WordContext);

  const language = languageList.map((language,index) => {
    let style = {};

    if (index < wrongGuesses) {
     
      style = {
        backgroundColor: language.backgroundColor, 
        color: language.color,
        filter: "grayscale(100%)",  
      };
    } else {
      style = {
        backgroundColor: language.backgroundColor,
        color: language.color,
      };
    }
    

    return (
      <div
        key={index}
        style={style}
      >
        <p className="p-1">{language.name}</p>
      </div>
    );
  });
  console.log(languageList);

  return <section className="language-bits">{language}</section>;
}
