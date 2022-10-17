import { useState } from 'react';
import { Predictions, Auth } from "aws-amplify";
import { AudioClass } from "./AudioClass";
  
// Amplify.addPluggable(new AmazonAIPredictionsProvider());
// Amplify.configure(awsconfig);
 
 
function TextToSpeech() {
  const [currentUser, setCurrentUser]=useState()
  Auth.currentUserInfo().then( e=> setCurrentUser(e.attributes.email))

  const [response, setResponse] = useState("...")
  const [textToGenerateSpeech, setTextToGenerateSpeech] = useState("write to speech");
  const [audioStream, setAudioStream] = useState();
  function generateTextToSpeech() {
    setResponse('Generating audio...');
    Predictions.convert({
      textToSpeech: {
        source: {
          text: textToGenerateSpeech,
          language: "fr-FR" 
        },
        voiceId: "Celine"
      }
    }).then(result => {
      
      setAudioStream(result.speech.url);
      setResponse(`Generation completed, press play`);
    })
      .catch(err => setResponse(JSON.stringify(err, null, 2)))
  }

  function setText(event) {
    setTextToGenerateSpeech(event.target.value);
  }

  const  play=  ()=> {
    var audio = new Audio();
    audio.src = audioStream;
    audio.play();

    // let file = await fetch(url).
    // then(r => r.blob()).
    // then(blobFile => new File(
    //   [blobFile], "fileNameGoesHere", { type: "image/png" }))
  }
  return (
    <div className="Text">
      <div>
        <h3>Text To Speech</h3>
        <input value={textToGenerateSpeech} onChange={setText}></input>
        <button onClick={generateTextToSpeech}>Text to Speech</button>
        <h3>{response}</h3>
        {/* <button onClick={play}>play</button> */}
        <audio  src={audioStream} controls autoPlay></audio>
         {/* <AudioClass  mediaSrc={audioStream}  user={currentUser}/> */}

      </div>
    </div>
  );
}
 
function TextProcess () {
  return (
    <div className="App">
      <h1>Text to Speech </h1>
      <TextToSpeech />
    </div>
  );
}
export default TextProcess; 