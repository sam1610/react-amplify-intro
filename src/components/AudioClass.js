import { Storage } from "aws-amplify";
import { useState } from "react";



const AudioClass= async (props)=>{
      // console.log(" actual User:", user);
      const UrlPath='https://audio-repo-bk92243-dev.s3.amazonaws.com/public/'
    const [audioUrl, setaudioUrl] = useState("")
    await fetch(props.mediaSrc)
      .then(
        r=>r.blob())
        .then( 
          async blob => {try {
             const flPut=  await Storage.put(`audio#${props.user}#${Date.now()}`, blob, {
            
                contentType:"audio/mp3",
                level:"public"
            });
            const audi0= await Storage.get(flPut.key, {level:'public'});
            setaudioUrl(encodeURIComponent(flPut.key));
            
            // console.log(`https://audio-repo-bk92243-dev.s3.amazonaws.com/public/${audioUrl}`);
            
          } catch (err) {
            console.log("File upload Error", err);
          }}
    
    )
return (
    <audio src={`${UrlPath}${audioUrl}`} controls autoPlay></audio>

)
}

export default AudioClass;