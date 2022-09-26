

import { Storage } from 'aws-amplify'
import React from 'react'


const handleImage= async (e)=>{
    const fl= e.target.files[0]
    try {
        await Storage.put( fl, fl, {
            contentType:fl.type,
            level:"protected"
        })
    } catch (err) {
        console.log("File upload Error", err);
    }
}
function StoragePut() {

  return (
    <div>
        <input type="file" accept="imgs/*" id="fileUpload" onChange={handleImage} />
    </div>
  )
}

export default StoragePut;