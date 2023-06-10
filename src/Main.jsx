import React, { useState, useEffect, useRef } from "react";
import "./Main.css";
import Keyboard from "./KeyboardDisplay";

const Main = () => {
  const [keysPressed, setKeysPressed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [nextKey, setNextKey] = useState("a");
  const [time, setTime] = useState(0);
  const [correctKeys, setCorrectKeys] = useState(0);
  const [incorrectKeys, setIncorrectKeys] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showAttentionMessage, setShowAttentionMessage] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const inputRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      if (isTimerRunning) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning]);

  useEffect(() => {
    if (time >= 300) {
      if (keysPressed === 0) {
        setShowAttentionMessage(true);
        setIsTimerRunning(false);
      } else {
        setShowResults(true);
        setIsTimerRunning(false);
      }
    }
  }, [time, keysPressed]);

  useEffect(() => {
    if (accuracy < 0) {
      setShowWarning(true);
      setIsTimerRunning(false);
    }
  }, [accuracy]);

  const handleKeyPress = (event) => {
    const { key } = event;
    if (key === nextKey) {
      setNextKey(getRandomKey());
      setCorrectKeys((prevCorrectKeys) => prevCorrectKeys + 1);
    } else {
      setAccuracy((prevAccuracy) => prevAccuracy - 1);
      setIncorrectKeys((prevIncorrectKeys) => prevIncorrectKeys + 1);
    }
    setKeysPressed((prevKeysPressed) => prevKeysPressed + 1);
    const physicalKey = document.getElementById(key);
    if (physicalKey) {
      physicalKey.classList.add("pressed");
      setTimeout(() => {
        physicalKey.classList.remove("pressed");
      }, 300);
    }
  };

  const getRandomKey = () => {
    const keys = ["a", "s", "d", "f", "j", "k", "l", ";"];
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const closeModal = () => {
    setShowResults(false);
    setShowAttentionMessage(false);
    setShowWarning(false);
    setKeysPressed(0);
    setAccuracy(100);
    setTime(0);
    setCorrectKeys(0);
    setIncorrectKeys(0);
    inputRef.current.value = "";
    setIsTimerRunning(true);
  };

  const getAccuracyMessage = () => {
    if (accuracy === 100) {
      return "Congratulations! Your touch typing progress is great!";
    } else if (accuracy >= 50 && accuracy < 100) {
      return "Keep practicing to improve your touch typing skills!";
    } else {
      return "Practice more to enhance your touch typing skills!";
    }
  };

  return (
    <div className="container">
      <div className="container1">
        <h1>Practice Here !</h1>
        <div className="keyboard-display">Next Key: {nextKey}</div>
        <input
          type="text"
          className="typing-box"
          autoFocus
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        <div className="stats">
          <p>Keys Pressed: {keysPressed}</p>
          <p>Accuracy: {accuracy}%</p>
          <p>Time: {formatTime(time)}</p>
        </div>
        {showResults && (
          <div className="modal">
            <div className="modal-content">
              <h2>Results</h2>
              <p>Correct Keys Pressed: {correctKeys}</p>
              <p>Incorrect Keys Pressed: {incorrectKeys}</p>
              <p>{getAccuracyMessage()}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
        {showAttentionMessage && (
          <div className="modal">
            <div className="modal-content">
              <h2>Attention</h2>
              <p>
                It seems you haven't pressed any keys. Wake up and start
                practicing!
              </p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
        {showWarning && (
          <div className="modal">
            <div className="modal-content">
              <h2>Warning</h2>
              <p>Your accuracy has fallen below 0%. Practice more!</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
      <div className="container2">
        <div className="keyboard-container">
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default Main;
