import styled, { css, createGlobalStyle, keyframes } from "styled-components";
import background from "./background.png";

export const colors = {
  background: "#F4F1C6"
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  html {
    scroll-behavior: smooth;
    height: 100%;
    min-height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.background};
    height: 100%;
  }
  #root {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
`;

export const LayoutCompleteAnimation = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: white;
  }
`;

interface TitleProps {
   isComplete: boolean;
};

export const Layout = styled.div<{isComplete: boolean}>`
  min-height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: crosshair;

  ${({ isComplete }) =>
    isComplete &&
    css`
      animation: 0.3s ${LayoutCompleteAnimation} infinite alternate;
    `}
`;

export const DoduAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DoduAnimationComplete = keyframes`
  0% {
    transform: rotate(-10deg);
    background-size: 500px;
  }
  50% {
    background-size: 400px;
  }
  100% {
    transform: rotate(10deg);
    background-size: 500px;
  }
`;

export const PereDodu = styled.div<{isComplete: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat center url(${background});
  background-size: 200px;
  animation: 480s ${DoduAnimation} linear;

  @media (min-width: 1024px) {
    background-size: 400px;
  }

  ${({ isComplete }) =>
    isComplete &&
    css`
      animation: 0.5s ${DoduAnimationComplete} infinite alternate;
    `}
`;

export const BackgroundAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const width =
  window.innerWidth > window.innerHeight
    ? window.innerWidth
    : window.innerHeight;

export const BackgroundWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: ${width}px;
  height: ${width}px;
  transform: translateY(-50%);
  padding: 16px;

  @media (min-width: 1024px) {
    padding: 100px;
  }
`;

export const BackgroundLayout = styled.div`
  width: 100%;
  height: 100%;
  animation: 240s ${BackgroundAnimation} linear infinite;
  transform-origin: center;
  z-index: 0;
`;

export const ScoreBarBubble: any = styled.div<{score?: number}>`
  position: absolute;
  bottom: 14px;
  transition: left 0.2s;
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50% 50% 50% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffa309;
  font-size: 12px;
  z-index: 2;

  ${({ score }) =>
    css`
      left: ${score}%;
    `}
`;

export const ScoreBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12px;
  background: white;
  cursor: auto;
`;

export const ScoreBarAdvancement = styled.div<{score: number}>`
  position: absolute;
  top: 3px;
  left: 3px;
  bottom: 3px;
  background: #ffa309;
  border-radius: 10px;
  transition: width 0.2s, opacity 0.2s;

  ${({ score }) =>
    css`
      width: calc(${score}% - 3px);
      opacity: ${0.01 * score + 0.5};
    `}
`;

export const RightScoreBarBubble = styled(ScoreBarBubble)`
  left: unset;
  right: 4px;
  border-radius: 50% 50% 0 50%;
  z-index: 1;
`;

export const CordonWrapper = styled.div<{top?: number, left?: number, scale?:number, opacity?:number, isRotating: boolean}>`
  ${({ top, left, scale, opacity }) =>
    css`
      position: absolute;
      top: ${top}%;
      left: ${left}%;
      transform: unset !important;
      opacity: ${opacity};
      width: ${scale}px;
      height: ${scale}px;
      z-index: 1;
      cursor: cell;

      svg {
        width: ${scale}px;
      }
    `};

  ${({ isRotating }) =>
    isRotating &&
    css`
      z-index: 0;
    `}
`;

export const SvgWrapper = styled.div<{rotation: number, isRotating: boolean}>`
  ${({ rotation }) =>
    css`
      transform: rotate(${rotation}deg);
    `};

  ${({ isRotating }) =>
    isRotating &&
    css`
      svg {
        animation: 1s ${BackgroundAnimation} linear infinite;
      }
    `};
`;
