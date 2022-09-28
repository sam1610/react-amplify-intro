import { Storage } from "aws-amplify";
// import axios from "axios";
import { ReactMediaRecorder } from "react-media-recorder";



const Audio2S3= async (blb)=>{
await fetch(blb)
  .then(
    r=>r.blob())
    .then( 
      blob => {try {
         Storage.put(`audio#${Date.now()}`, blob, {
        
            contentType:"audio/mp3",
            level:"protected"
        })
      } catch (err) {
        console.log("File upload Error", err);
      }}

)}


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
          <audio src="https://audio-repo-bk92243-dev.s3.amazonaws.com/public/math.hack2020%40gmail.com%231664189897344" controls autoplay></audio>
      
          
          
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

            <button  onClick={()=>Audio2S3(mediaBlobUrl) }>upload Audio</button>
        </div>
      )}
    />
  </div>
)}
export default AudioS3;