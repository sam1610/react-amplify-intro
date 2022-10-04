import { Storage } from "aws-amplify";
import { useState } from "react";
// import axios from "axios";
import { ReactMediaRecorder } from "react-media-recorder";






// const resp = await fetch(blb)
// const blob= await resp.blob()

// const config={responseType:'blob'}
// await axios.get( blb, {responseType: 'blob'}).then(
//   r=> r.blob()).then( blobFile => {
//     const  file = new File([blobFile], "audio.mp3", { type:"audio/mpeg"});
//     Storage.put("Audio_blob", file,{
//             contentType:"audio/mpeg",
//             level:"protected"
//     })
//   }
// )}

// 

// const test = async  (blb)=>{

//   const file = await fetch(blb).then((res)=>res.blob()).then(
//     (myblob)=> { new File([myblob], "audio.wav", { type:"audio/wav"})

//     }
//   )
// }
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
          setaudioUrl(audi0)
          console.log("this is mt link", audioUrl);
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
          src={audioUrl}
                    controls autoplay></audio>
      
          
          
          {/* <button onClick={
            async ()=>{
              await fetch(mediaBlobUrl)
                .then(
                  r=>r.blob())
          .then( blob=> Storage.put(`${props.user}#${Date.now()}`, blob,{
                    contentType:"audio/mp3",
                    level:"public"
                  }
              
              ))}
          }>Upload Recording</button> */}

            <button  onClick={()=>Audio2S3(mediaBlobUrl, props.user) }>Upload Audio</button>
        </div>
      )}
    />
  </div>
)}
export default AudioS3;