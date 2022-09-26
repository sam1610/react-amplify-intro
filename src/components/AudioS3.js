import { Storage } from "aws-amplify";
// import axios from "axios";
import { ReactMediaRecorder } from "react-media-recorder";



const Audio2S3= async (blb, msg)=>{
console.log(msg)
await fetch(blb)
  .then(
    r=>r.blob())
    .then( blob=> Storage.put("audio26_1", blob,{
      contentType:blob.type,
      level:"protected"
    }

))}
// const file= new File([blb], "audio1.mp3",{
//           type:blb.type,
//           lastModified: new Date().getTime()
//       })
// try {
//   await Storage.put("Audio_test", file, {
//     // await Storage.put(`${Date.now()}-${file}`, file, {
  
//       contentType:"audio/mpeg",
//       level:"protected"
//   })
// } catch (err) {
//   console.log("File upload Error", err);
// }}
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
const  AudioS3 =()=>{ 
return (
  // reactmic npm has teh trend actually
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
          <audio src="./sample-0.mp3" controls autoPlay >Check your Browser Audio </audio>
      
          
          
          <button onClick={
            async ()=>{
              await fetch(mediaBlobUrl)
                .then(
                  r=>r.blob())
                  .then( blob=> Storage.put("audio26_2", blob,{
                    contentType:"audio/mp3",
                    level:"protected"
                  }
              
              ))}
          }>Upload Recording</button>
        </div>
      )}
    />
  </div>
)}
export default AudioS3;