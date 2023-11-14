import { useRef, useState } from "react";
import "./TicTacToe.css";
import circle__icon from "../Assets/circle.png";
import cross__icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let case1 = useRef(null);
  let case2 = useRef(null);
  let case3 = useRef(null);
  let case4 = useRef(null);
  let case5 = useRef(null);
  let case6 = useRef(null);
  let case7 = useRef(null);
  let case8 = useRef(null);
  let case9 = useRef(null);

  let case_arr = [
    case1,
    case2,
    case3,
    case4,
    case5,
    case6,
    case7,
    case8,
    case9,
  ];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross__icon}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle__icon}'>`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src='${cross__icon}'> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src='${circle__icon}'> wins`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "TicTacToe<span>React</span>";
    case_arr.map((e) => {
      return (e.current.innerHTML = "");
    });
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        TicTacToe<span>React</span>
      </h1>
      <div className="board">
        <div className="row__1">
          <div
            className="case"
            ref={case1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="case"
            ref={case2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="case"
            ref={case3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row__2">
          <div
            className="case"
            ref={case4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="case"
            ref={case5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="case"
            ref={case6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row__3">
          <div
            className="case"
            ref={case7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="case"
            ref={case8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="case"
            ref={case9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
