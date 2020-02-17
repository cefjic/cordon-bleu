import React, { useState } from "react";
import {
  GlobalStyle,
  Layout,
  BackgroundLayout,
  PereDodu,
  RightScoreBarBubble,
  ScoreBar,
  ScoreBarAdvancement,
  ScoreBarBubble,
  BackgroundWrapper
} from "./App.styles";
import Cordon from "./Cordon";

const minOpacity = 0.15;

const randomLocalization = n => {
  const opacity = Math.random();
  return {
    top: Math.floor(Math.random() * 100),
    left: Math.floor(Math.random() * 100),
    rotation: Math.floor(Math.random() * 360),
    scale: Math.floor(Math.random() * Math.floor(n > 55 ? 200 : 90 - 20) + 20),
    opacity: opacity > minOpacity ? opacity : minOpacity
  };
};

const nbCordons = window.innerWidth > 1024 ? 70 : 30;

const list = Array.from({ length: nbCordons }, (_, k) => k + 1).map(index =>
  randomLocalization(index)
);

const CordonsList = ({ addOne, removeOne }) => {
  return (
    <BackgroundWrapper>
      <BackgroundLayout>
        {list.map((props, index) => (
          <Cordon
            {...props}
            addOne={addOne}
            removeOne={removeOne}
            index={index}
            key={index}
          />
        ))}
      </BackgroundLayout>
    </BackgroundWrapper>
  );
};

const Score = ({ score, nbRotating }) => (
  <ScoreBar>
    <ScoreBarAdvancement score={score} />
    <ScoreBarBubble score={score}>{nbRotating}</ScoreBarBubble>
    <RightScoreBarBubble>{nbCordons}</RightScoreBarBubble>
  </ScoreBar>
);

const App = () => {
  const [nbRotating, setNbRotating] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const addOne = () => {
    setNbRotating(nbRotating + 1);
  };

  const removeOne = () => {
    setNbRotating(nbRotating - 1);
  };

  const score = (nbRotating * 100) / nbCordons;

  const isComplete = nbCordons === nbRotating;

  const onEscape = ({ keyCode }) => {
    if (keyCode === 83) {
      setShowScore(!showScore);
    }
  };

  document.addEventListener("keydown", onEscape, { passive: true });

  return (
    <Layout isComplete={isComplete}>
      <PereDodu isComplete={isComplete} />
      <CordonsList addOne={addOne} removeOne={removeOne} />
      {showScore && <Score score={score} nbRotating={nbRotating} />}
      <GlobalStyle />
    </Layout>
  );
};

export default App;
