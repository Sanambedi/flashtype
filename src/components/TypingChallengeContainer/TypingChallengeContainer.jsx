import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import "./TypingChallengeContainer.css"

const TypingChallengeContainer = ({ 
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
    }) => {
    return ( 
        <div className="typing-challenge-container">
            {/*Details Sections*/}
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words}/> 

                {/* Characters Typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/> 

                {/* Speed */}
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm}/> 
                
            </div>
            
            {/* The Real Challenge*/}
            <div className="typewriter-container">
                <TypingChallenge 
                    onInputChange={onInputChange}
                    testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted} 
                />
            </div>
        </div>
    );
}
 
export default TypingChallengeContainer;