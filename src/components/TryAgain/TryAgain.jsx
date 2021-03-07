import React from 'react';
import "./TryAgain.css"
const TryAgain = ({
    words,
    characters,
    wpm,
    startAgain
}) => {
    return ( 
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters:</b>{characters}
                </p>
                <p>
                    <b>Words:</b>{words}
                </p>
                <p>
                    <b>Speed:</b>{wpm}
                </p>
            </div>
            <div>
                <button onClick={() =>startAgain()} className="end-buttons start-again-btn" >Re-Try</button>
                <button 
                    className="end-buttons share-btn" onClick={()=>{
                        window.open("https://www.facebook.com/sharer/sharer.php?u=sanambedi.github.io/nameit" ,
                        "facebook-share-dialog",
                        "width=800,height=600")
                    }}>Facebook
                </button>
                <button 
                    className="end-buttons tweet-btn" onClick={()=>{
                        window.open("https://twitter.com/intent/tweet?text=sanambedi.github.io/nameit",
                        "Twitter",
                        "width=800,height=600")
                    }}
                >
                        Tweet
                </button>
            </div>
        </div>
    );
}
 
export default TryAgain;