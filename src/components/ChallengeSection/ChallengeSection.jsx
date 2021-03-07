import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import "./ChallengeSection.css"
const ChallengeSection = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {
    return ( 
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed testnow!
            </h1>
            <TestContainer 
                timeRemaining={timeRemaining} 
                timerStarted={timerStarted} 
                selectedParagraph={selectedParagraph} 
                words={words} 
                characters={characters} 
                wpm={wpm} 
                testInfo={testInfo}
                onInputChange={onInputChange}
                startAgain={startAgain}
            />
        </div>
    );
}
 
export default ChallengeSection;