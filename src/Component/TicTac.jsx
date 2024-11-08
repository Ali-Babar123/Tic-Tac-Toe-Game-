import React, { useRef, useState } from 'react'
import circle_icon from "../assets/circle.png"
import cross_icon from "../assets/cross.png"

let data = ["", "", "", "", "", "", "", "", ""]

const TicTac = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) return;  // Prevent moves after the game is locked
    if (data[num] !== "") return;  // Prevent overwriting an existing move

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
    }
    setCount(count + 1);
    checkWin();  // Always check for a winner after every move
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      Won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      Won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      Won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      Won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      Won(data[6]);
    }
  };

  const Won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src='${cross_icon}' >Wons`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src='${circle_icon}'Wons >`;
    }
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    setLock(false);
    document.querySelectorAll(".boxes").forEach(box => box.innerHTML = "");  
    titleRef.current.innerHTML = "Tic Tac Toe Game in React";  
  };

  return (
    <div className='container text-center'>
      <h1 className='title text-4xl flex justify-center items-center text-white mt-10 mb-8' ref={titleRef}>
        Tic Tac Toe Game in<span className='text-green-400 ml-2 font-bold'>React</span>
      </h1>
      <div className="board flex h-[500px] w-[564px] m-auto">
        <div className="row1">
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes h-[160px] w-[180px] border-2 border-gray-400 bg-[#1f3540] flex rounded-[12px]" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className='reset p-4 w-44 border border-black cursor-pointer text-3xl rounded-full text-green-400 font-medium bg-gray-600 hover:bg-gray-700' onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTac;
