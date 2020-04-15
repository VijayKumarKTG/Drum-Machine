import React from 'react';
import './App.css';
import Q from './assets/audio/Q.wav';
import W from './assets/audio/W.wav';
import E from './assets/audio/E.wav';
import A from './assets/audio/A.wav';
import S from './assets/audio/S.wav';
import D from './assets/audio/D.wav';
import Z from './assets/audio/Z.wav';
import X from './assets/audio/X.wav';
import C from './assets/audio/C.wav';
import one from './assets/images/1.jpg';
import two from './assets/images/2.jpg';
import three from './assets/images/3.jpg';
import four from './assets/images/4.jpg';
import five from './assets/images/5.jpg';
import six from './assets/images/6.jpg';
import seven from './assets/images/7.jpg';
import items from './assets/json/audioAss.json';

const padURLArr = [Q, W, E, A, S, D, Z, X, C];
const imgurl = [one, two, three, four, five, six, seven];
const padStrArr = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
let buttonArr = [];

function numpad() {
  for (let i = 0; i < padURLArr.length; i++) {
    buttonArr.push(
      <button
        className="drum-pad"
        id={padStrArr[i]}
        key={padStrArr[i]}
        onClick={handleClick}
      >
        {padStrArr[i]}
        <audio>
          <source src={padURLArr[i]} type="audio/mpeg" />
          <p>Your browser doesn't support HTML5 audio.</p>
        </audio>
      </button>
    );
  }
}

function handleClick(e) {
  let audios = document.querySelectorAll('audio');
  audios.forEach((ele) => {
    if (!ele.paused) {
      ele.pause();
    }
  });
  let body = document.querySelector('body');
  let rand = Math.floor(Math.random() * 7);
  body.style.backgroundImage = `url(${imgurl[rand]})`;
  console.log(body);
  console.log(rand);
  let text = e.target.id;
  let aud = e.target.children[0];
  let display = document.querySelector('#display');
  display.textContent = items[text]['display'];
  aud.play();
}

function App() {
  return (
    <div id="drum-machine">
      <div id="display">Welcome To Your Favourite Drum Machine</div>
      <div id="keypad">
        {numpad()}
        {buttonArr}
      </div>
    </div>
  );
}

export default App;
