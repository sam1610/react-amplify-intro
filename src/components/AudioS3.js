import { Storage } from "aws-amplify";
import { useState } from "react";
// import axios from "axios";
import { ReactMediaRecorder } from "react-media-recorder";

const  AudioS3 =(props)=>{ 
  const [audioUrl, setaudioUrl] = useState("")
  const Audio2S3= async (blb, user)=>{
    // console.log(" actual User:", user);
  await fetch(blb)
    .then(
      r=>r.blob())
      .then( 
        async blob => {try {
           const flPut=  await Storage.put(`audio#${user}#${Date.now()}`, blob, {
          
              contentType:"audio/mp3",
              level:"public"
          });
          const audi0= await Storage.get(flPut.key, {level:'public'});
          setaudioUrl(encodeURIComponent(flPut.key));
          
          // console.log(`https://audio-repo-bk92243-dev.s3.amazonaws.com/public/${audioUrl}`);
          
        } catch (err) {
          console.log("File upload Error", err);
        }}
  
  )}


return (
  // Probleme de passage de param   onClick={ ()=> function(rapm)}
  //droite d'acces au bucket , links s3, ul , SignedUrl

  <div>
    <ReactMediaRecorder
      audio
      whenStopped={(blobUrl) => console.log(blobUrl)}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <audio src={mediaBlobUrl} controls autoPlay /> 
          <audio 
          src={`https://audio-repo-bk92243-dev.s3.amazonaws.com/public/${audioUrl}`}

                controls autoPlay></audio>
            <button  onClick={()=>Audio2S3(mediaBlobUrl, props.user) }>Upload Audio</button>
        </div>
      )}
    />
  </div>
)}
export default AudioS3;
