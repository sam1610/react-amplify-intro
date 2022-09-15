import React, { useState } from 'react';
import { Predictions } from "aws-amplify";

 
function TextTranslation() {
  const [response, setResponse] = useState("Input text to translate")
  const [textToTranslate, setTextToTranslate] = useState("write to translate");

  function translate() {
    Predictions.convert({
      translateText: {
        source: {
          text: textToTranslate,
          language : "en" 
        },
        targetLanguage: "ar"
      }
    }).then(result => setResponse(JSON.stringify(result, null, 2)))
      .catch(err => setResponse(JSON.stringify(err, null, 2)))
  }

  function setText(event) {
    setTextToTranslate(event.target.value);
  }

  return (
    <div className="Text">
      <div>
        <h3>Text Translation</h3>
        <input value={textToTranslate} onChange={setText}></input>
        <button onClick={translate}>Translate</button>
        <p>{response}</p>
      </div>
    </div>
  );
}
 
 
function Translate() {
  return (
    <div className="App">
        <h1> Translate</h1>
      <TextTranslation />
      <hr />
      <hr />
    </div>
  );
}
export default Translate; 