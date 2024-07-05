import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import {Timeup} from './Timeup_popup_model.jsx'
import Pause from './Pause.jsx';
import { ThemeContext } from '../context/theme.js';
import Timer from './Timer.jsx';
import { stringify } from 'postcss';

function Game() {
  const WALL_WIDTH = 1411;
  const WALL_HEIGHT = 454 ;
  const OBJ_WIDTH = 144;
  const OBJ_HEIGHT = 256;
  const [gameon, setGameon] = useState(true);

  const [clicked, setClicked] = useState(false);
  // const refContainer = useRef();
  // const [dimensions, setDimensions] = useState({
  //       width: 0,
  //       height: 0,
  //   });
  //   useEffect(() => {
  //       if (refContainer.current) {
  //           setDimensions({
  //               width: refContainer.current.offsetWidth,
  //               height: refContainer.current.offsetHeight,
  //           });
  //       }
  //   }, [dimensions.width, dimensions.height]);

  // const MAXWIDTH = dimensions.width;
  // const MAXHEIGHT = dimensions.height;

  // console.log(MAXWIDTH, MAXHEIGHT);

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [topPos, setTopPos] = useState(Math.max(0, Math.floor(Math.random()*(WALL_HEIGHT-OBJ_HEIGHT) + 1)));
  const [leftPos, setLeftPos] = useState(Math.max(0, Math.floor(Math.random()*(WALL_WIDTH-OBJ_WIDTH) + 1)));
  const [paused, setPaused] = useState(false);
  const {Theme} = useContext(ThemeContext)
  const [timer, setTimer] = useState(3)

  useEffect(() =>{
      let intervalId
      if(timer >= 0){
          intervalId = setInterval(() => {
              setTimer(timer-1);
          }, 1000);
      }
      return () => clearInterval(intervalId)
  },[timer])

  // console.log(timer)
  // console.log(gameon);
  useEffect(() => {
    // setting up interval 
    let interval;
    // console.log(gameon)
    if(time != 0 && !paused && timer < 0){
      // setGameon(true);
      interval = setInterval(() => {
        setTime(time-1);
      },1000);
    }
    else if(time == 0){
      setGameon(false)
    }
    // clearing interval 
    return () => clearInterval(interval);
  }, [time,timer])

  useEffect(() => {
    //Implementing the setInterval method
    let interval ;
    if(time != 0 && !paused && timer < 0){
      interval = setInterval(() => {
          // setCount(count + 1);
          // let val1 = max(0, Math.floor(Math.random()*(MAXWIDTH-144) + 1));
          // let val2 = max(0, Math.floor(Math.random()*(MAXHEIGHT-256) + 1));
          const val1 = Math.max(0, Math.floor(Math.random()*(WALL_WIDTH-OBJ_WIDTH) + 1));
          const val2 = Math.max(0, Math.floor(Math.random()*(WALL_HEIGHT-OBJ_HEIGHT) + 1));
          // console.log(MAXHEIGHT, MAXWIDTH, topPos, leftPos, val1, val2);
          setLeftPos(val1);
          setTopPos(val2);
          setClicked(false);

      }, 1000);
    }
    //Clearing the interval
    return () => clearInterval(interval);
  }, [leftPos, topPos,time,timer]);


  function incrementScore(){
    if(time != 0 && !clicked){
      setScore(score+1);
      setClicked(true);
    }
  }
  function resume(e) {
    // console.log('hi');
    setPaused(false) ;
    setTime(time+1)
    setTimer(3)
  }

  const Replay = (e) => {
    setTime(5);
    setGameon(true);
    setScore(0);
    setTimer(3);
    if(paused){
      setPaused(false);
    }
  }
  // const updateScore = ()=>{
  //   const prvScore = localStorage.getItem("score")
  //   tempScore = stringify(score)
  //   if(tempScore > prvScore){
  //     localStorage.setItem("score", tempScore)
  //   }
  // }
  // console.log(hi);
  return (
    <>
    <div style={{backgroundImage: `url(${Theme})`}}
    className={`w-full h-full bg-cover bg-no-repeat flex  justify-center items-center flex-wrap relative`}>

      {/* {!gameon ? <div className=' animate-PopUpWindow w-96 h-96 p-1 bg-cyan-900 flex 
        flex-col justify-center items-center absolute z-50'>
        <div>
          Your Score: {score}
        </div>
        <div>
          Highest Score: {score}
        </div>
      </div> : null} */}
      {(timer >= 0 ? <Timer timer = {timer} /> : null)}
      {(!gameon && !time) ? <Timeup score = {score} Replay = {Replay}/> : null}
      {(paused) ? <Pause close = {resume} Replay = {Replay}/> : null}

      <div className='h-1/5 flex justify-between w-full p-5  text-white text-xl'>
        {/* <button type='button' className='flex flex-col'>Theme</button> */}
        <div className='h-full flex flex-col'>
          <p>Your Score: {score}</p>
          <p>Time Left: {time}</p>
        </div>
        <div>
          <button type = 'button' onClick={(e) => (setPaused(true))}>
            icon 
          </button>
        </div>
      </div>
      <div 
      // ref={refContainer}
      className='h-4/5 w-full p-5 relative'>
        <div onClick={incrementScore}
          className={`bg-[url('/src/Images/zombieimgNew.png')] bg-contain bg-no-repeat w-36 h-64 absolute ${(!gameon || paused) ? `hidden`: `block`}`}
          style={{top: topPos, left: leftPos}}
        // ref={refContainer}
        ></div> 
      </div>
    </div>
    </>
  )
}

export default Game


  // let intervalId ;

  // const start = (e) => {
  //   e.preventDefault();
  //   if(!intervalId){
  //     setInterval(() => {
  //       setLeftPos(Math.round(Math.random()*50 + 1));
  //       setTopPos(Math.round(Math.random()*50 + 1));
  //     }, 2000);
  //   }
  //   // document.getElementById('Start').innerText = 'Stop';
  // }
  

  // const Stop = (e) => {
  //   e.preventDefault();
  //   clearInterval(intervalId);
  //   intervalId = null;
  //   // console.log('hi');
  // }


  
  // let pos = console.lgo(Math.floor(Math.random()*(100) + 1));
  // let score = 0;
  // let time = 100;
  // const refcontainer = useRef();
