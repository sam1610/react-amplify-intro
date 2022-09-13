import { Amplify, Auth, Predictions } from "aws-amplify";
import { useState } from "react";




function TextIdentify() {

    const [response, setResponse] = useState("You can add a photo ....");


    function identityFromFile(e) {



        setResponse("identifying text...")
        const { target: { files } } = e
        const [file,] = files || [];
        if (!file) {
            return;
        }
        Predictions.identify({
            text: {
                source: { file },
                format: "PLAIN"
            }
        }).then(({ text: { fullText } }) => {
            setResponse(fullText)
        }).catch(err => setResponse(JSON.stringify(err, null, 2)))
    }

    return (
        <div className="Text">
            <div style={{ padding: 50 }}>
                <h3> Text identification</h3>
                <input type="file"  onChange={identityFromFile}/>
                <p style={{
                    backgroundColor: 'black', color: 'white', padding: 20
                }}> {response}</p>
            </div>
        </div>
    )
}
export default TextIdentify;
