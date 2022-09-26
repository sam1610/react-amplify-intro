import MicRecorder from "mic-recorder-to-mp3";
import { useEffect, useState, useRef } from "react";
import axios from "axios"
const  RecSpeech=()=>{
    const recorder = useRef(null)
    const audioPlayer = useRef(null)
const [bolbUrl, setBolbUrl] = useState(null)
const [audioFile, setAudioFile] = useState(null)
const [isRecording, setIsRecording] = useState(null)
useEffect(() => {
    recorder.current= new MicRecorder({ bitRate:128})
}, [])
const startRecording=()=>{
    recorder.current.start().then(()=> {
        setIsRecording(true)
    })
}
const stopRecording = ()=>{
    recorder.current
    .stop()
    .getMp3()
    .then(([buffer, blob])=> {
        const file= new File( buffer, "audio.mp3", {
            type:blob.type,
            lastModified:Date.now(),
        })
    const NewBlobUrl= URL.createObjectURL(blob)
    setBolbUrl(NewBlobUrl)
    setIsRecording(false)
    setAudioFile(file)
    })
    .catch((e)=> console.log(e))
}
    return(
        <div>
            <h1> React Speech recognition App</h1>
            <audio ref={audioPlayer} src={bolbUrl} controls="controls"/>
            <div>
                <button disabled={ isRecording} onClick={ startRecording}> Start</button>
                <button disabled={!isRecording} onClick={stopRecording}> Stop</button>
                <button>Submit</button>
            </div>
        </div>
    )
}
export default RecSpeech;