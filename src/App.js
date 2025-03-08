import React, { useState } from 'react';
import './App.css';

function FlipCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
            <div className="card-inner">
                <div className="card-front">
                    <h2>Front Side</h2>
                </div>
                <div className="card-back">
                    <h2>Back Side</h2>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <div className="card-container">
                {Array.from({ length: 10 }).map((_, index) => (
                    <FlipCard key={index} />
                ))}
            </div>
        </div>
    );
}

export default App;
